import pluginJs from "@eslint/js";
import globals from "globals";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  { languageOptions: { globals: globals.jest } },
  { languageOptions: { globals: globals.node } },
pluginJs.configs.recommended,
];