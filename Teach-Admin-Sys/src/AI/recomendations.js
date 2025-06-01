import * as tf from "@tensorflow/tfjs";

export function recommendCourses(userHistory) {
  const courses = [
    "JavaScipt",
    "Python",
    "Machine Learning",
    "React",
    "Node.js",
  ];

  if (!Array.isArray(userHistory) || userHistory.length !== courses.length) {
    throw new Error(
      "userHistory deve ser um array de tamanho " + courses.length
    );
  }

  const otherUsers = [
    [1, 0, 0, 0, 1], // Usuário 1:
    [0, 1, 1, 0, 1], // Usuário 2:
    [1, 1, 1, 0, 0], // Usuário 3:
  ];

  // Adiciona o usuário atual no conjunto de dados
  const preferences = tf.tensor2d([...otherUsers, userHistory]);

  // Faz o calculo de similaridade com outros usuários (produto escalar)
  const sim = tf.matMul(preferences, preferences.transpose());

  // Soma as similaridades com outros usuários para o usuário atual
  const similarities = sim
    .slice([preferences.shape[0] - 1, 0], [1, preferences.shape[0]])
    .dataSync();

  // Gera recomendações, sugerindo cursos que o usuário não marcou
  // mas usuários simiçares marcaram
  const recommendations = [];
  userHistory.forEach((value, index) => {
    if (value === 0) {
      let score = 0;
      for (let i = 0; i < otherUsers.length; i++) {
        score += otherUsers[i][index] * similarities[i];
      }
      if (score > 0) recommendations.push({ course: courses[index], score });
    }
  });

  // Ordena por score e retorna apenas os nomes dos cursos recomendados
  return recommendations
    .sort((a, b) => b.score - a.score)
    .map((rec) => rec.course);
}
