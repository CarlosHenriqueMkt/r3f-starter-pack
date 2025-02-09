import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
	{ ignores: ["dist"] },
	{
		files: ["**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
				THREE: "readonly", // Add THREE global for R3F
			},
			parserOptions: {
				ecmaVersion: "latest",
				ecmaFeatures: { jsx: true },
				sourceType: "module",
			},
		},
		settings: {
			react: { version: "18.3" },
			"import/resolver": {
				node: {
					extensions: [".js", ".jsx"],
				},
			},
		},
		plugins: {
			react,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs["jsx-runtime"].rules,
			...reactHooks.configs.recommended.rules,
			"react/jsx-no-target-blank": "off",
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			// R3F specific rules
			"react/no-unknown-property": [
				"error",
				{
					ignore: [
						"position",
						"rotation",
						"args",
						"object",
						"geometry",
						"material",
						"intensity",
						"makeDefault",
					],
				},
			],
		},
	},
];
