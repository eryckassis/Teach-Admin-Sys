module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" }, // Garante que o código é compatível com Node.js
      },
    ],
  ],
};
