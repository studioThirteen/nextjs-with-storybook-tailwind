module.exports = {
    "stories": [
        // Paths to the story files
        "../pages/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        require.resolve('storybook-addon-grid/preset'),
        /* {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    // test: [/\.stories\.jsx?$/], This is default
                    include: [path.resolve(__dirname, '../stories')], // You can specify directories
                },
                loaderOptions: {
                    prettierConfig: { printWidth: 80, singleQuote: false },
                },
            },
        }, */
        '@geometricpanda/storybook-addon-iframe',
        'storybook-addon-next-router', 
        {
          name: '@storybook/addon-postcss',
            options: {
               postcssLoaderOptions: {
                  implementation: require('postcss'),
                },
            },
        },
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ]
}