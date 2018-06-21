#!/usr/bin/env node
const { spawn } = require("child_process");

const deno = spawn("docker", [
  "run",
  "--rm",
  "-v",
  `${process.cwd()}:/opt`,
  "maxmcd/deno:slim",
  "deno",
  ...process.argv.slice(2)
]);

deno.on("error", err => {
  console.log(`deno could not be started:\n${err}\n`);
});

deno.on("close", code => {
  console.log(`deno exited with code ${code}\n`);
});

deno.stdout.on("data", data => {
  console.log(data.toString());
});

deno.stderr.on("data", data => {
  console.log(data.toString());
});
