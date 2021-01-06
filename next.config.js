const withSass = require("@zeit/next-sass");
const path = require("path");
require("dotenv").config();

module.exports = withSass({});
module.exports = {
      sassOptions: {
            includePaths: [path.join(__dirname, "styles")],
      },
      env: {
            OMISE_OUBLIC_KEY: process.env.OMISE_OUBLIC_KEY,
            STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
      },

      exportPathMap: async function (
            defaultPathMap,
            { dev, dir, outDir, distDir, buildId }
      ) {
            return {
                  "/": { page: "/" },
                  "/about": { page: "/About" },
                //   "/p/hello-nextjs": {
                //         page: "/post",
                //         query: { title: "hello-nextjs" },
                //   },
                //   "/p/learn-nextjs": {
                //         page: "/post",
                //         query: { title: "learn-nextjs" },
                //   },
                //   "/p/deploy-nextjs": {
                //         page: "/post",
                //         query: { title: "deploy-nextjs" },
                //   },
            };
      },
};
