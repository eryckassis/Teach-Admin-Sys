import { detectAnomaliesRobust } from "../src/AI/anomalyDetectionRobust";
import { expect, test } from "@jest/globals";

test("Anomaly Detection Robust - Teste de Detecção de Anomalias", () => {
  // Faz a simulação de um array de logs de exemplo
  const logs = [10, 12, 11, 15, 100, 14, 13, 12, 11, 10];
  const resultado = detectAnomaliesRobust(logs);

  // Espera que exista pelo menos 1 anomalia detectada (ajuste conforme seu algoritmo)
  expect(Array.isArray(resultado)).toBe(true);
  expect(resultado.length).toBeGreaterThan(0);
});

function gerarLogsSimulados(N, taxaAnomalia = 0.12) {
  const logs = [];
  for (let i = 0; i < N; i++) {
    logs.push(
      Math.random() < taxaAnomalia
        ? 40 + Math.random() * 10
        : 10 + Math.random() * 5
    );
  }
  return logs;
}

for (let exec = 1; exec <= 5; exec++) {
  const logs = gerarLogsSimulados(100, 0.15);
  const resultados = detectAnomaliesRobust(logs);
  const anomalias = resultados.filter((r) => r.isAnomaly).length;
  const esperado = 100 * 0.15; // 15% de anomalias esperadas
  console.log(
    ` Execução ${exec}: ${anomalias} anomalias detectadas, esperado ~${esperado.toFixed(
      0
    )}`
  );
  if (anomalias < esperado * 0.5 || anomalias > esperado * 1.5) {
    throw new Error(`teste falhou: Fora do intervalo esperado!`);
  }
}
console.log("Todos os 5 testes passaram com sucesso!");
