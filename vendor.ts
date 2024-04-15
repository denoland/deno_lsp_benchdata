// Copyright 2024 the Deno authors. All rights reserved. MIT license.

/** Vendors the listed repos (and their dependencies) */

import $ from "jsr:@david/dax@^0.40.0";
import { parse } from "jsr:@std/jsonc@^0.222.1";
import { exists, expandGlob } from "jsr:@std/fs@^0.222.1";
import { relative } from "jsr:@std/path@^0.222.1";

// The repos (and the commit) to vendor
const repos = [
  ["deco-cx/apps", "0eea548beb28ed53425aecdb0bade87856e051a5"],
];

for (const [repo, commitHash] of repos) {
  const repoName = repo.split("/")[1];
  if (await exists(`./${repoName}`)) {
    if (await $.confirm(`${repoName} already exists, overwrite it?`)) {
      await $`rm -rf ./${repoName}`;
    }
  }
  await $`git clone https://github.com/${repo}.git --single-branch ${repoName}`;
  $.cd(`./${repoName}`);
  await $`git reset --hard ${commitHash}`;
  await $`rm -rf ./.git`;

  let denoConfig;
  for (const f of ["deno.jsonc", "deno.json"]) {
    const pth = `./${f}`;
    if (await exists(pth)) {
      denoConfig = pth;
      break;
    }
  }
  if (!denoConfig) {
    denoConfig = `./deno.json`;
    await Deno.writeTextFile(denoConfig, "{}");
  }
  const contents = await Deno.readTextFile(denoConfig);
  const parsed = parse(contents, { allowTrailingComma: true });
  if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
    parsed["vendor"] = true;
  }
  await Deno.writeTextFile(denoConfig, JSON.stringify(parsed));

  const files = [];
  let count = 0;
  for await (const entry of expandGlob("**/*.{ts,js,mjs,cjs,cts,mts,jsx,tsx}")) {
    if (count++ > 1000) {
      break;
    }
    files.push(relative(".", entry.path));
  }
  
  await $`deno cache --vendor ${files}`;

}

