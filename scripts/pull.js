const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const PROXY_PATH = path.join(ROOT, "00-proxy");
const MAPA_PATH = path.join(PROXY_PATH, "mapa.json");

function run(cmd) {
  execSync(cmd, { cwd: ROOT, stdio: "inherit" });
}

run("git submodule update --init 00-proxy");

if (!fs.existsSync(MAPA_PATH)) {
  console.error("mapa.json nao encontrado em 00-proxy. Rode npm run init primeiro.");
  process.exit(1);
}

const mapa = JSON.parse(fs.readFileSync(MAPA_PATH, "utf8"));

for (const entrada of mapa) {
  run(`git submodule update --init ${entrada.pathNoJornada}`);
  console.log(`${entrada.pathNoJornada} -> ${entrada.area}`);
}
