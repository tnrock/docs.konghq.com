const fs = require("fs");
const oss = JSON.parse(fs.readFileSync("./oss.json"));
const ee = JSON.parse(fs.readFileSync("./ee.json"));

// Diff the entries and label anything in EE that isn't in OSS

module.exports = function () {
  const allEE = loadVars(ee);
  const allOSS = loadVars(oss);

  const eeOnly = [];

  for (let item in allEE) {
    if (!allOSS[item]) {
      eeOnly.push(item);
    }
  }

  return eeOnly;
};

function loadVars(item) {
  const all = {};
  for (let section of item) {
    for (let v in section.vars) {
      all[v] = {};
    }
  }
  return all;
}
