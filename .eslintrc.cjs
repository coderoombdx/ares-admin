module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['svelte3', '@typescript-eslint'],
    ignorePatterns: ['*.cjs'],
    overrides: [{files: ['*.svelte'], processor: 'svelte3/svelte3'}],
    settings: {
        'svelte3/typescript': () => require('typescript')
    },
    parserOptions: {
        sourceType: 'module',
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    rules: {
        "@typescript-eslint/no-empty-interface": 0,
        "no-negated-in-lhs": "error",
        "no-cond-assign": ["error", "except-parens"],
        curly: ["error", "all"],
        "object-curly-spacing": ["error", "always"],
        eqeqeq: ["error", "smart"],
        "no-unused-expressions": "error",
        "no-sequences": "error",
        "no-nested-ternary": "error",
        "no-unreachable": "error",
        "wrap-iife": ["error", "inside"],
        "no-caller": "error",
        quotes: ["error", "double"],
        "no-undef": "off",
        "no-unused-vars": "off",
        "comma-style": ["error", "last"],
        camelcase: [
            "error",
            {
                properties: "never",
            },
        ],
        "dot-notation": [
            "error",
            {
                allowPattern: "^[a-z]+(_[a-z]+)+$",
            },
        ],
        "max-len": [
            "error",
            {
                code: 120,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreRegExpLiterals: true,
            },
        ],
        "no-mixed-spaces-and-tabs": "error",
        "no-trailing-spaces": "error",
        "no-multi-str": "error",
        "comma-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ],
        "space-before-blocks": ["error", "always"],
        "space-in-parens": ["off"],
        "keyword-spacing": [2],
        semi: ["error", "always"],
        "semi-spacing": [
            "error",
            {
                // Because of the `for ( ; ...)` requirement
                // "before": true,
                after: true,
            },
        ],
        "space-infix-ops": "error",
        "eol-last": "error",
        "linebreak-style": ["error", "unix"],
        "no-with": "error",
        "brace-style": "error",
        "space-before-function-paren": ["off"],
        "no-loop-func": "error",
        "no-spaced-func": "error",
        "key-spacing": [
            "error",
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        "space-unary-ops": [
            "error",
            {
                words: false,
                nonwords: false,
            },
        ],
        "no-multiple-empty-lines": 2,
        "vue/multi-word-component-names": "off",
        "vue/no-v-html": "off",
    },
};
