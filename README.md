
# Moez Dbira Portfolio Website


This is a portfolio website for Moez Dbira.

Website: [www.dbira-moez.fr](https://www.dbira-moez.fr)

It showcases personal projects, skills, and contact information. The site is built with React and TypeScript, and is designed to be modern, responsive, and easy to navigate.

## Development

Use Node.js 22 (or Node.js 20.19.0 or later within the 20.x release line). With
[nvm](https://github.com/nvm-sh/nvm), run `nvm install` and `nvm use` from the
project directory to select the version in `.nvmrc`.

Check `node --version` in the same terminal before building. Adding `.nvmrc`
does not switch Node.js automatically, and Windows and WSL have separate
Node.js installations. Node.js 18 is not supported by this project's Vite version.

Then install dependencies and build:

```sh
npm ci
npm run build
```

If nvm is not installed, you can run the build with Node.js 22 without changing
your system Node.js installation:

```sh
npx --yes --package=node@22 -c 'npm run build'
```

The Vite configuration uses the `.mts` extension so it is loaded as an ES module.
