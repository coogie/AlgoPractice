#!/usr/bin/env node
import path from "path";
import chalk from "chalk";
import { pathToFileURL } from "url";
import Benchmark from "benchmark";
const { log } = console;
const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log("ERROR!");
  console.log("\t Script takes one argument only:");
  console.log("\t npm run bench <suite_name>");
}

const exercise = args[0];
const exerciseFile = path.join(
  process.cwd(),
  "exercises",
  exercise,
  "index.mjs"
);
const exerciseImport = pathToFileURL(exerciseFile);

(async () => {
  const exporteds = await import(exerciseImport);
  const { data } = exporteds;

  const suite = new Benchmark.Suite();
  for (const exported in exporteds) {
    const func = exporteds[exported];
    if (typeof func !== "function") continue;
    suite.add(`${func.testname || func.name}`, () => {
      func(data);
    });
  }

  suite
    .on("start", () => {
      log(`  ┌ Running "${chalk.cyan(exercise)}" benchmarks...`);
    })
    .on("cycle", (event) => {
      log(`  ├─ ${event.target}`);
    })
    .on("complete", function () {
      log(`  └ ${chalk.green("Done!")}`);
      log(
        `\nFastest is "${chalk.underline.green(
          this.filter("fastest").map("name")
        )}"\n`
      );
    })
    .run({ async: false });
})();
