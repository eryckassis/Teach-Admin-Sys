export default {
  transform: {
    "^.+\\.js$": "babel-jest", // Transpilar arquivos .js usando o Babel
  },
  testEnvironment: "node", // Define o ambiente de testes como Node.js
  transformIgnorePatterns: [
    "/node_modules/", // Ignorar transformação na pasta node_modules
  ],
};
// Configuração do Jest para o Teach-Admin-Sys
