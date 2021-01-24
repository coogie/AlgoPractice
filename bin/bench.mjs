#!/usr/bin/env node
import fs from "fs";
import path from "path";
import chalk from "chalk";
import { pathToFileURL } from "url";
import Benchmark from "benchmark";
const { log } = console;
const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("ERROR!");
  console.error("\t Script takes one argument only:");
  console.error("\t npm run bench <suite_name>\n");
  process.exit(1);
}

const exercise = args[0];
const exerciseDir = path.join(process.cwd(), "exercises", exercise);
const exerciseFile = path.join(exerciseDir, "index.mjs");
const exerciseImport = pathToFileURL(exerciseFile);

(async () => {
  const exporteds = await import(exerciseImport);
  const { data } = exporteds;

  if (!data) {
    console.error("ERROR!");
    console.error("\t Benchmark missing `data` export to use as argument\n");
    process.exit(1);
  }

  const suite = new Benchmark.Suite();
  for (const exported in exporteds) {
    const func = exporteds[exported];
    if (typeof func !== "function") continue;
    suite.add(`${func.testname || func.name}`, () => {
      func.apply(null, data);
    });
  }

  const stream = fs.createWriteStream(path.join(exerciseDir, "bench.txt"));
  stream.once("open", () => {
    suite
      .on("start", () => {
        log(`  ┌ Running "${chalk.cyan(exercise)}" benchmarks...`);
        stream.write(`  ┌ Running "${exercise}" benchmarks...\n`);
        // If a method under bench actually calls out to console.log, not only
        // does the console get polluted, but it dramatically impacts perf.
        global.console.log = () => {};
      })
      .on("cycle", (event) => {
        const out = `  ├─ ${event.target}`;
        log(out);
        stream.write(`${out}\n`);
      })
      .on("complete", function () {
        const fastest = this.filter("fastest").map("name");
        log(`  └ ${chalk.green("Done!")}`);
        stream.write(`  └ Done!\n`);
        log(`\nFastest is "${chalk.underline.green(fastest)}"\n`);
        stream.write(`\nFastest is "${fastest}"\n`);
        // Restore console.log
        global.console.log = log;
      })
      .run();
  });
})();
