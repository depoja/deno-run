# deno-run

CLI script for using/running [deno](https://github.com/ry/deno), until something better comes up.

## Requirements

- [Docker](https://www.docker.com)

## Installation

#### Using npm

```sh
npm i -g @srcode/deno-run
```

#### Using yarn

```sh
yarn global add @srcode/deno-run
```

## Usage

The package will set up the command `deno`, which you can use like below.
It will create a docker container from the following image [deno-docker](https://github.com/maxmcd/deno-docker),
mount the cwd to the container and execute your command as you would normally expect.

```sh
deno someFile.ts
```
