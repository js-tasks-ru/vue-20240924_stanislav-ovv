import vueCourseConfig from '@shgk/vue-course-taskbook/configs/eslint.config.js'

export default [
	// По умолчанию установлены:
	// - Рекомендуемые правила ESLint: https://eslint.org/docs/latest/rules/
	// - Рекомендуемые правила TypeScript: https://typescript-eslint.io/rules/
	// - Рекомендуемые правила Vue (с некоторыми отключенными правилами): https://eslint.vuejs.org/rules/
	...vueCourseConfig,

	{
		rules: {
			// Здесь вы можете переопределять правила по своему усмотрению
			"no-unused-vars": "warn",
			"@typescript-eslint/no-unused-vars": "warn",
			"no-undef": "warn",
			"no-unsafe-optional-chaining": "warn",
			"no-useless-escape":"off",
			"indent": ["error", "tab", { "SwitchCase": 1, "MemberExpression": 1 }],
			"no-empty": "off",

			// vue
			"vue/component-definition-name-casing": ["error", "PascalCase" | "kebab-case"],
		}
	}
]
