const { JsiiProject } = require('projen');
const project = new JsiiProject({
  author: 'securitywing',
  authorAddress: 'syras@securitywing.com',
  defaultReleaseBranch: 'main',
  // name: 'cdksecuritywing/testmodule',
  // repositoryUrl: 'https://github.com/syras/testmodule.git',
  name: '@cdksecuritywing/testmodule',
  repositoryUrl: 'https://github.com/syras/testmodule.git',
  jest: false,
  devDeps: [
    '@types/semver',
    '@types/fs-extra',
    'fs-extra',
    'glob',
  ],
  bundledDeps: [
    'semver',
  ],
  gitignore: [
    '.idea/',
  ],
  deps: ['projen',
    's3module',
    '@aws-cdk/core'],
  peerDeps: ['projen',
    's3module',
    '@aws-cdk/core'],
  npmDistTag: 'latest',
  npmRegistryUrl: 'https://registry.npmjs.org',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();