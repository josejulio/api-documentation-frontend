const { override, getBabelLoader } = require("customize-cra");
const path = require("path");
const {globSync} = require("glob");
const packageJson = require("./package.json");

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const configureMonaco = (config) => {
    config.plugins.push(new MonacoWebpackPlugin({
        languages: ['c', 'go', 'python', 'java', 'javascript', 'shell']
    }));

    return config;
}

const resolveSSI = (config) => {
    config.module.rules.push({
        test: /\.html?$/,
        use: [
            {
                loader: 'html-loader'
            },
            {
                loader: 'webpack-ssi-include-loader',
                options: {
                    location: 'https://developers.redhat.com',
                    disableLocalScan: true,
                    onFileMatch: (filePath, fileContent, isLocal) => {
                        console.log(fileContent);
                        return fileContent.replaceAll('https://developers.redhat.com', 'http://localhost:3000/developers_base/')
                        /*console.log('--------------------')
                        console.log(filePath)
                        console.log(fileContent)
                        console.log(isLocal)*/
                    }
                },
            },
        ]
    });

    return config;
}

/**
 * Allows to include code from other workspaces - the code is then compiled by typescript.
 * @param config
 * @returns {*}
 */
const addWorkspaces = (config) => {
    const loader = getBabelLoader(config, false);
    const workspaces = packageJson.workspaces;

    let packages;
    if ('packages' in workspaces) {
        packages = workspaces.packages;
    } else {
        packages = workspaces;
    }

    const resolvedPaths = globSync(packages)
        .map(p => path.normalize(path.join(process.cwd(), p)));

    if (typeof loader.include === 'string') {
        loader.include = [loader.include];
    }

    loader.include = [...loader.include, ...resolvedPaths];
    return config;
}

module.exports = override(
    addWorkspaces,
    configureMonaco,
    resolveSSI
);
