import { ESLint } from "eslint";

export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      prettier: ESLint.Plugin.Prettier,
    },
    rules: {
      ...ESLint.Recommended.rules,
      "prettier/prettier": "error",
    },
  },
];
