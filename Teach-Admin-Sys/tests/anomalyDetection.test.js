/* eslint-disable no-undef */
import { detectionAnomaly } from "../src/AI/anomalyDetection";

describe("Anomaly Detection", () => {
  test("Deve retornar false para logs vazios", () => {
    expect(detectionAnomaly([])).toBe(false);
  });

  test("Deve detectar anomalia corretamente", () => {
    const logs = [10, 12, 13, 11, 50]; // 50 é um valor anômalo
    expect(detectionAnomaly(logs)).toBe(true);
  });

  test("Não deve detectar anomalia para valores normais", () => {
    const logs = [10, 12, 11, 13, 12];
    expect(detectionAnomaly(logs)).toBe(false);
  });

  test("Deve respeitar a sensibilidade configurada", () => {
    const logs = [10, 12, 13, 11, 25]; // Com sensibilidade alta, 25 não é anômalo
    expect(detectionAnomaly(logs, 2.5)).toBe(false);
    expect(detectionAnomaly(logs, 1.2)).toBe(true); // Com sensibilidade baixa, 25 é anômalo
  });
});
