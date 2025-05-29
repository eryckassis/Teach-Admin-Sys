module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest", // Use o Babel para transformar arquivos .js
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(nome-do-modulo-que-requer-transformacao)/)", // Substitua "nome-do-modulo-que-requer-transformacao" pelo nome do módulo problemático
  ],
};
