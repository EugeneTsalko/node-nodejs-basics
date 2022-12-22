

const parseEnv = () => {
    const env = process.env;

    for (const rssVar in env) {
        if (env.hasOwnProperty(rssVar) && rssVar.toString().startsWith('RSS_')) {
            console.log(`${rssVar}=${env[rssVar]}`)
        }
    }
};

parseEnv();