module.exports = {
    branches: ["main"],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md",
                "writeOptions": {
                    "bodySeparator": "\n\n",
                    "header": "# Changelog\n\n",
                    "bodyMaxLength": 10000000000,
                    "lineMaxLength": 10000000000,
                    "footerMaxLength": 10000000000
                }
            }
        ],
        [
            "@semantic-release/git",
            {
                assets: ["package.json", "CHANGELOG.md"],
            },
        ],
        "@semantic-release/github",
    ],
};