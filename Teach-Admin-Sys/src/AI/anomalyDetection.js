/**
 * @file anomalyDetection.js
 * @description Detecta anomalias nos logs do usuário com base em uma média e um limite de sensibilidade.
 * @module anomalyDetection
 */

/**
 * Detecta anomalias nos logs de acesso do usuário.
 * @param {Array<number} userLogs - lista de logs de acesso do usuário.
 * @param {number} sensitivity - Sensibilidade para o limite de anomalia (1.0 = 100% da média).
 * @returns {Boolean} -  Retorna true se uma anomalia for detectada, caso o contrario, retorna false.
 */

export function detectionAnomaly(userLogs, sensitivity = 1.5) {
  if (!Array.isArray(userLogs) || userLogs.length === 0) {
    throw new TypeError("Os logs do usuário devem ser um array não vazio.");
  }

  const average = calculateAverage(userLogs);
  const threshold = calculateThreshold(average, sensitivity);

  console.info(`Média calculada: ${average}`);
  console.info(`limite de anomalia: ${threshold}`);

  return userLogs.some((log) => log > threshold);
}

/**
 * Calcula a média dos valores de um array.
 * @param {Array<number>} values -  Array de valores númericos.
 * @returns {number} - Média dos valores.
 */

function calculateAverage(values) {
  const sum = values.reduce((total, value) => total + value, 0);
  return sum / values.length;
}

/**
 * Faz o cálculo do limite de anomalia com base na média e na sensibilidade.
 * @param {number} average  - Média dos logs de acesso do usuário.
 * @param {*} sensitivity - Sensibilidade para o limite.
 * @returns {number} - Limite de anomalia calculado.
 */

function calculateThreshold(average, sensitivity) {
  return average * sensitivity;
}
