// import jsdoc from "eslint-plugin-jsdoc"
import tseslint from "typescript-eslint";

export default [
    { files: ["**/*.{ts,tsx}"] },
    ...tseslint.configs.recommended,
    {
        rules: {
            "no-console": "warn",
            "quotes": [
                "warn",
                "double",
                {
                    "allowTemplateLiterals": true,
                    "avoidEscape": true
                }
            ],
            "semi": ["warn", "never"],
            "no-unused-vars": "warn"
        }
    }
]