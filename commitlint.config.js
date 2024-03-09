module.exports = {
    extends: ['@commitlint/config-conventional'],
    ignores: [(message) => /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message)],
    rules: {
        //   TODO Add Scope Enum Here
        // 'scope-enum':  commitlintConfig.rules['scope-enum'],
        //"scope-enum": [2, "always", [""api", "client", "server", "common", "config", "scripts", "vercel"]],
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
