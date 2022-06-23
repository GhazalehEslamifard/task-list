module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  root: true,
  extends: [
    "react-app",
    "eslint:recommended",
    "google",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "eslint-plugin-tsdoc",
    "prettier",
  ],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2019,
        project: ["tsconfig.json"],
        sourceType: "module",
        warnOnUnsupportedTypeScriptVersion: false,
      },
      rules: {
        "@typescript-eslint/no-invalid-this": ["error"],
        "@typescript-eslint/no-unused-vars": [
          process.env.CI ? "error" : "warn",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-useless-constructor": ["error"],
        "@typescript-eslint/no-non-null-assertion": "off",
        "tsdoc/syntax": "error",
        "valid-jsdoc": "off",
      },
    },
  ],
  rules: {
    eqeqeq: ["error", "always", { null: "ignore" }],
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "no-console": process.env.CI ? "error" : "warn",
    "no-invalid-this": "off",
    "no-unused-vars": [
      "error",
      {
        args: "all",
        ignoreRestSiblings: true,
      },
    ],
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    "no-useless-computed-key": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "off",
    "no-useless-return": "error",
    "prettier/prettier": "error",
    "require-jsdoc": 0,
    "react-hooks/exhaustive-deps": "off",
    "prefer-template": "error",
  },
};
