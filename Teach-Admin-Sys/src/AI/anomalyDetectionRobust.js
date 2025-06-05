import * as tf from "@tensorflow/tfjs";

export function detectAnomaliesRobust(userLogs, options = {}) {
  if (!Array.isArray(userLogs) || userLogs.length < 3) {
    throw new Error(
      "userLogs deve ser um array numérico com pelo menos 3 elementos."
    );
  }

  // 1. Estatísticas Z-Score
  const tensor = tf.tensor1d(userLogs);
  const mean = tensor.mean().arraySync();
  const std = tensor.sub(mean).square().mean().sqrt().arraySync();
  const thresholdZ = options.thresholdZ || 2.5;

  // 2. Séries temporais: Checa desvios locais (rolling window)
  const window = options.window || 5;
  function rollingMean(index) {
    const start = Math.max(0, index - window);
    const end = Math.min(userLogs.length, index + window + 1);
    const local = userLogs.slice(start, end);
    return local.reduce((a, v) => a + v, 0) / local.length;
  }

  // 3. DBSCAN simplificado (outlier por densidade)
  // Usando apenas distâncias entre pontos para marcar outliers

  function dbscanOutliers(eps = 4, minPts = 2) {
    const outliers = new Set();
    for (let i = 0; i < userLogs.length; i++) {
      let neighbors = 0;
      for (let j = 0; j < userLogs.length; j++) {
        if (i !== j && Math.abs(userLogs[i] - userLogs[j]) < eps) {
          neighbors++;
        }
      }
      if (neighbors < minPts) outliers.add(i);
    }
    return outliers;
  }
  const dbscanSet = dbscanOutliers(options.eps, options.minPts);

  // Resultado auditável: cada ponto recebe métodos de detecção
  return userLogs.map((value, index) => {
    const zScore = Math.abs(value - mean) / (std || 1);
    const rolling = Math.abs(value - rollingMean(index)) > std * 1.5;
    const dbscan = dbscanSet.has(index);
    const isAnomaly = zScore > thresholdZ || rolling || dbscan;
    return {
      index,
      value,
      isAnomaly,
      methods: {
        zScore: zScore > thresholdZ,
        rolling,
        dbscan,
      },
      scores: {
        zScore,
        mean,
        std,
      },
    };
  });
}
