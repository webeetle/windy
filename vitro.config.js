// read more at https://vitro.now.sh/docs/config
/** @type {import('@vitro/cli').VitroConfig} */
module.exports = {
  globs: ["./**/*.vitro.jsx"], // globs to search for experiment files
  ignore: ["node_modules"], // add directories to ignore when searching for experiment files
  // basePath: '/vitro-app', // modifies the deployed base path
};
