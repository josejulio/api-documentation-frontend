import {APIConfiguration, apiConfigurations, pages} from "@apidocs/common";
import {getCommand} from "./program.js";
import path from "path";
import {statSync} from 'fs';
import {fileURLToPath} from "url";
import {createSitemap} from "sitemaps";
import {UrlItem} from "sitemaps";

interface Options {
    outputDir: string;
    baseUri: string;
}

export const createApiUrlItems = (config: ReadonlyArray<Readonly<APIConfiguration>>): Array<UrlItem> => {

    return config.map(c => ({
        loc: pages.getApiPage(c.id),
        lastmod:  statSync(path.join('..', 'common', 'config', c.apiPath)).mtime.toISOString()
    }));
}

export const createLandingPageUrlItem = (): UrlItem => ({
    loc: pages.getLandingPage()
});

export const execute = async (options: Options) => {
    const urlItems = [
        createLandingPageUrlItem(),
        ...createApiUrlItems(apiConfigurations),
    ].map(u => ({
        ...u,
        loc: `${options.baseUri}${u.loc}`
    }));

    createSitemap({
        filePath: path.join(options.outputDir, 'sitemap.xml'),
        urls: urlItems
    });
}

if (process.argv) {
    const nodePath = path.resolve(process.argv[1]);
    const modulePath = path.resolve(fileURLToPath(import.meta.url))

    if (nodePath === modulePath) {
        const command = getCommand();
        command.parse(process.argv);
        execute(command.opts() as Options);
    }
}
