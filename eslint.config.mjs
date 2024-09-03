import eslintHTML from "@html-eslint/eslint-plugin";
import eslintTailwindCSS from "eslint-plugin-tailwindcss";
import eslintHTMLParser from "@html-eslint/parser";
import eslintAngularParser from "@angular-eslint/template-parser";

export default [
{
    "files": [ "**/*.html" ],
    "languageOptions": {
      parser: eslintHTMLParser,
    },
    "plugins": {
      "@html-eslint": eslintHTML,
    },
    "rules": {
     "@html-eslint/require-doctype": 1
    }
  },
  {
    "files": [ "**/*.html" ],
    "languageOptions": {
      parser: eslintAngularParser,
    },
    "plugins": {
      "tailwindcss": eslintTailwindCSS,
    },
    "rules": {
        "tailwindcss/no-custom-classname": [ 2 ],
    },
  },
]