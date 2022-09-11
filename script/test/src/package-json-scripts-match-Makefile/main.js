import { readFile } from "fs/promises";

let exitCode = 0;
const SIMPLE_MAKEFILE_TARGET_MATCH = /^([A-Za-z\-]+):/;

const makefileText = await readFile(
  new URL("../../../../Makefile", import.meta.url),
  "utf-8",
);
let inScriptsSection = true;
const makefileScriptTargets = [];
for (const line of makefileText.split("\n")) {
  if (line.includes("Shared with `package.json`")) {
    inScriptsSection = true;
  }
  if (line.includes("Only in `Makefile`")) {
    inScriptsSection = false;
  }
  if (inScriptsSection) {
    const match = SIMPLE_MAKEFILE_TARGET_MATCH.exec(line);
    if (match) {
      makefileScriptTargets.push(match[1]);
    }
  }
}

const packageJSON = JSON.parse(
  await readFile(new URL("../../../../package.json", import.meta.url), "utf-8"),
);
const packageJSONScripts = [];
for (const [scriptName, shell] of Object.entries(packageJSON.scripts)) {
  if (shell !== `make ${scriptName}`) {
    console.error(
      `Script in \`package.json\` does not have the correct shell: ${scriptName}`,
    );
    exitCode = 1;
  }
  packageJSONScripts.push(scriptName);
}

function logDifference(from, subtract) {
  const output = [];
  for (const entry of from) {
    if (!subtract.includes(entry)) {
      output.push(entry);
    }
  }
  if (output.length === 0) {
    console.log("  (none)");
  } else {
    exitCode = 1;
    console.log(output.map((entry) => `  ${entry}`).join("\n"));
  }
}

console.log("Makefile targets that are not package.json scripts:");
logDifference(makefileScriptTargets, packageJSONScripts);
console.log("package.json scripts that are not Makefile targets:");
logDifference(packageJSONScripts, makefileScriptTargets);

process.exit(exitCode);
