module.exports = {
    extends: ['@commitlint/config-conventional'],
    ignores: [(message) => /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message)],
    rules: {
        //   TODO Add Scope Enum Here
        // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
        "body-max-line-length": [2, "always", 10000000000],
        "footer-max-line-length": [2, "always", 10000000000],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'chore',
                'style',
                'build',
                'refactor',
                'ci',
                'test',
                'revert',
                'perf',
                'vercel',
            ],
        ],
    },
};