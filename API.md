# API Reference <a name="API Reference"></a>


## Structs <a name="Structs"></a>

### AwsCdkClosedSourceTypeScriptAppOptions <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AwsCdkClosedSourceTypeScriptAppOptions } from '@cdksecuritywing/testmodule'

const awsCdkClosedSourceTypeScriptAppOptions: AwsCdkClosedSourceTypeScriptAppOptions = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* $BASEDIR

This is the name of your project.

---

##### `logging`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* [`projen.LoggerOptions`](#projen.LoggerOptions)
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* `string`
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* [`projen.Project`](#projen.Project)

The parent project, if this project is part of a bigger project.

---

##### `projenrcJson`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* `boolean`
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcOptions;
```

- *Type:* [`projen.json.ProjenrcOptions`](#projen.json.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.json.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* [`projen.github.AutoApproveOptions`](#projen.github.AutoApproveOptions)
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* [`projen.github.AutoMergeOptions`](#projen.github.AutoMergeOptions)
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* `boolean`
- *Default:* true

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* `boolean`
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* [`projen.github.GitHubOptions`](#projen.github.GitHubOptions)
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* `boolean`
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* [`projen.ProjectType`](#projen.ProjectType)
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `readme`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* [`projen.SampleReadmeProps`](#projen.SampleReadmeProps)
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `stale`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* `boolean`
- *Default:* true

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* [`projen.github.StaleOptions`](#projen.github.StaleOptions)
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* `boolean`
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* `string`

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* `string`

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* `boolean`

Author's Organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* `string`

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bundledDeps`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* `string`[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `peerDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `deps`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* `string`[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `description`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* `string`[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `entrypoint`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* `string`
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* `string`

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* `string`[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* `string`
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/master/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* `boolean`
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* `string`
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* `string`
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* [`projen.NpmAccess`](#projen.NpmAccess)
- *Default:* for scoped packages (e.g. `foo@bar`), the default is
`NpmAccess.RESTRICTED`, for non-scoped packages, the default is
`NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* `string`
- *Default:* "latest"

Tags can be used to provide an alias instead of version numbers.

For example, a project might choose to have multiple streams of development
and use a different tag for each stream, e.g., stable, beta, dev, canary.

By default, the `latest` tag is used by npm to identify the current version
of a package, and `npm install <pkg>` (without any `@<version>` or `@<tag>`
specifier) installs the latest tag. Typically, projects only use the
`latest` tag for stable release versions, and use other tags for unstable
versions such as prereleases.

The `next` tag is used by some projects to identify the upcoming version.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* `string`

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* `string`
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* `string`
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* [`projen.NodePackageManager`](#projen.NodePackageManager)
- *Default:* NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* `string`
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* [`projen.PeerDependencyOptions`](#projen.PeerDependencyOptions)

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* `string`[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `projenCommand`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* `string`
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `repository`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scripts`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.scripts"></a>

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.

---

##### `stability`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* `string`

Package's Stability.

---

##### `antitamper`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.antitamper"></a>

```typescript
public readonly antitamper: boolean;
```

- *Type:* `boolean`
- *Default:* true

Checks that after build there are no modified files on git.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* `string`
- *Default:* "dist"

A directory which will contain artifacts to be published to npm.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* `string`
- *Default:* "latest"

Version requirement of `jsii-release` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* `number`
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* `string`
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `releaseBranches`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: [`projen.release.BranchOptions`](#projen.release.BranchOptions)}
- *Default:* no additional branches are used for release. you can use
`addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEveryCommit`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseEveryCommit"></a>

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* `boolean`
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* `string`
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### `releaseSchedule`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseSchedule"></a>

```typescript
public readonly releaseSchedule: string;
```

- *Type:* `string`
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* `string`
- *Default:* "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* `string`
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* `string`
- *Default:* "main"

The name of the main release branch.

---

##### `autoApproveProjenUpgrades`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.autoApproveProjenUpgrades"></a>

```typescript
public readonly autoApproveProjenUpgrades: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* `boolean`
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `codeCov`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* `boolean`
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* `string`
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* `string`
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* `string`
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### ~~`dependabot`~~<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.dependabot"></a>

- *Deprecated:* - use `depsUpgrade: DependenciesUpgradeMechanism.dependabot()`

```typescript
public readonly dependabot: boolean;
```

- *Type:* `boolean`
- *Default:* false

Include dependabot configuration.

---

##### ~~`dependabotOptions`~~<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.dependabotOptions"></a>

- *Deprecated:* - use `depsUpgrade: DependenciesUpgradeMechanism.dependabot()`

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* [`projen.github.DependabotOptions`](#projen.github.DependabotOptions)
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: DependenciesUpgradeMechanism;
```

- *Type:* [`projen.DependenciesUpgradeMechanism`](#projen.DependenciesUpgradeMechanism)
- *Default:* DependenciesUpgradeMechanism.dependabot if dependabot is true, otherwise a DependenciesUpgradeMechanism.githubWorkflow configured from other passed-in NodeProjectOptions

How to handle dependency upgrades.

---

##### `gitignore`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* `string`[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* `boolean`
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* [`projen.JestOptions`](#projen.JestOptions)
- *Default:* default options

Jest options.

---

##### `mergifyOptions`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.mergifyOptions"></a>

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* [`projen.github.MergifyOptions`](#projen.github.MergifyOptions)
- *Default:* default options

Options for mergify.

---

##### `mutableBuild`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* `string`[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* `boolean`
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* `boolean`
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenDuringBuild`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenDuringBuild"></a>

```typescript
public readonly projenDuringBuild: boolean;
```

- *Type:* `boolean`
- *Default:* true

Execute `projen` as the first step of the `build` task to synthesize project files.

This applies both to local builds and to CI builds.

Disabling this feature is NOT RECOMMENDED and means that manual changes to
synthesized project files will be persisted.

---

##### `projenrcJs`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* `boolean`
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* [`projen.javascript.ProjenrcOptions`](#projen.javascript.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.js.

---

##### ~~`projenUpgradeAutoMerge`~~<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenUpgradeAutoMerge"></a>

- *Deprecated:* use `autoApproveProjenUpgrades`.

```typescript
public readonly projenUpgradeAutoMerge: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `projenUpgradeSchedule`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenUpgradeSchedule"></a>

```typescript
public readonly projenUpgradeSchedule: string[];
```

- *Type:* `string`[]
- *Default:* [ "0 6 * * *" ]

Customize the projenUpgrade schedule in cron expression.

---

##### `projenUpgradeSecret`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenUpgradeSecret"></a>

```typescript
public readonly projenUpgradeSecret: string;
```

- *Type:* `string`
- *Default:* no automatic projen upgrade pull requests

Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`).

This setting is a GitHub secret name which contains a GitHub Access Token
with `repo` and `workflow` permissions.

This token is used to submit the upgrade pull request, which will likely
include workflow updates.

To create a personal access token see https://github.com/settings/tokens

---

##### `projenVersion`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* `string`
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* `boolean`
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* `string`[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* `boolean`
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* `boolean`
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: any[];
```

- *Type:* `any`[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* `string`
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `compileBeforeTest`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.compileBeforeTest"></a>

```typescript
public readonly compileBeforeTest: boolean;
```

- *Type:* `boolean`
- *Default:* if `testdir` is under `src/**`, the default is `true`, otherwise the default is `false.

Compile the code before running tests.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* `boolean`
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `docgen`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* `boolean`
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* `string`
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* `string`
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* `boolean`
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* [`projen.EslintOptions`](#projen.EslintOptions)
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* `string`
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `package`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* `boolean`
- *Default:* true

Defines a `yarn package` command that will produce a tarball and place it under `dist/js`.

---

##### `projenrcTs`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* [`projen.typescript.ProjenrcOptions`](#projen.typescript.ProjenrcOptions)

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* `boolean`
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* `string`
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* `string`
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* [`projen.TypescriptConfigOptions`](#projen.TypescriptConfigOptions)

Custom TSConfig.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* `string`
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `cdkVersion`<sup>Required</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* `string`
- *Default:* "1.95.2"

AWS CDK version to use.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* `string`
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `cdkDependencies`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.cdkDependencies"></a>

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* `string`[]

Which AWS CDK modules (those that start with "@aws-cdk/") this app uses.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use pinned version instead of caret version for CDK.

You can use this to prevent yarn to mix versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `context`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Additional context to include in `cdk.json`.

---

##### `requireApproval`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: CdkApprovalLevel;
```

- *Type:* [`projen.CdkApprovalLevel`](#projen.CdkApprovalLevel)
- *Default:* CdkApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `closedSource`<sup>Optional</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions.property.closedSource"></a>

```typescript
public readonly closedSource: boolean;
```

- *Type:* `boolean`
- *Default:* The default is true.

If set to true, some default values are modified compared to the settings for AwsCdkTypeScriptApp

---

## Classes <a name="Classes"></a>

### AwsCdkClosedSourceTypeScriptApp <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptApp"></a>

Closed source CDK App, Typescript.

#### Initializers <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptApp.Initializer"></a>

```typescript
import { AwsCdkClosedSourceTypeScriptApp } from '@cdksecuritywing/testmodule'

new AwsCdkClosedSourceTypeScriptApp(options: AwsCdkClosedSourceTypeScriptAppOptions)
```

##### `options`<sup>Required</sup> <a name="@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptApp.parameter.options"></a>

- *Type:* [`@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions`](#@cdksecuritywing/testmodule.AwsCdkClosedSourceTypeScriptAppOptions)

---





