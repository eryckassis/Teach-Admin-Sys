import * as tf from "@tensorflow/tfjs";

export function recommendCourses(userHistory) {
  const courses = [
    "JavaScipt",
    "Python",
    "Machine Learning",
    "React",
    "Node.js",
  ];
}

if (!Array.isArray(userHistory) || userHistory.length !== courses.length) {
  throw new Error("userHistory deve ser um array de tamanho" + courses.length);
}

const otherUsers = [];
