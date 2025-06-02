import * as tf from "@tensorflow/tfjs";

export function detectAnomaliesRobust(userLogs, options = {}) {
  if (!Array.isArray(userLogs) || userLogs.length < 3) {
    throw new Error(
      "userLogs deve ser um array numérico com pelo menos 3 elementos."
    );
  }
}

const tensor = tf.tensor1d(userLogs);
const mean = tensor.mean().arraySync();
