export default {
  transform: {
    "^.+\\.js$": "babel-jest", // Transpilar arquivos .js usando Babel
  },
  testEnvironment: "node", // Define o ambiente de teste como Node.js
  moduleNameMapper: {
    // Ajusta caminhos de import, se necessário
    "^@models/(.*)$": "<rootDir>/src/models/$1",
  },
  verbose: true, // Mostra detalhes dos testes no terminal
};
