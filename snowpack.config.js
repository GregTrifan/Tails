/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      public: { url: '/', static: true },
      src: { url: '/dist' },
    },
    plugins: [
      '@snowpack/plugin-dotenv',
      '@snowpack/plugin-typescript',
      '@prefresh/snowpack',
      "@snowpack/plugin-postcss",
    ],
    alias: {
      // Enable Compatibility to React libs, like react-redux
      "react": "preact/compat",
      "react-dom": "preact/compat"
    },
    routes: [
      /* Enable an SPA Fallback in development: */
      // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
      /* Example: Bundle your final build: */
      // "bundle": true,
    },
    packageOptions: {
      /* ... */
    },
    devOptions: {
      /* ... */
    },
    buildOptions: {
      /* ... */
    },
  };