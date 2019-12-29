module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    Enemy: "readonly",
    Player: "readonly",
    Attack: "readonly",
    Map: "readonly",
    Skill: "readonly",
    Terrain: "readonly",
    Game: "readonly",
    theGame: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {"require-jsdoc" : 0}
};
