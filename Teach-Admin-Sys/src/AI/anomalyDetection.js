export function detectionAnomaly(userLogs, sensitivity = 1.5) {
  if (!Array.isArray(userLogs) || userLogs.length === 0) {
    console.error("Os logs do usuário devem ser um array não vazio.");
    return false;
  }

  const average = calculateAverage(userLogs);
  const threshold = calculateThreshold(average, sensitivity);

  console.info(`Média calculada: ${average}`);
  console.info(`limite de anomalia: ${threshold}`);

  return userLogs.some((log) => log > threshold);
}

function calculateAverage(values) {
  const sum = values.reduce((total, value) => total + value, 0);
  return sum / values.length;
}

function calculateThreshold(average, sensitivity) {
  return average * sensitivity;
}
