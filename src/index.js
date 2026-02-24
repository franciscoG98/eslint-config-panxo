import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";
import boundaries from "eslint-plugin-boundaries";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: {
      import: importPlugin,
      unicorn,
      boundaries
    },
    settings: {
      "import/resolver": {
        typescript: {}
      },
      "boundaries/elements": [
        { type: "app", pattern: "app/*" },
        { type: "features", pattern: "features/*" },
        { type: "shared", pattern: "shared/*" }
      ]
    },
    rules: {
      /* Base */
      "no-console": "error",
      "prefer-const": "error",
      "no-var": "error",
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      eqeqeq: ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],

      /* TS */
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/consistent-type-imports": "error",

      /* Import */
      "import/no-relative-parent-imports": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: ["../*", "../../*", "../../../*"]
        }
      ],

      /* Naming */
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
            pascalCase: true
          }
        }
      ],

      /* Boundaries */
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            { from: "app", allow: ["features", "shared"] },
            { from: "features", allow: ["shared"] },
            { from: "shared", allow: ["shared"] }
          ]
        }
      ]
    }
  }
];
