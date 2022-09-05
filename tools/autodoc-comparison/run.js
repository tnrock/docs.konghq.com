const diff = require("./diff");
const nunjucks = require("nunjucks");
const fs = require("fs");
const titleize = require("titleize");
let ee = JSON.parse(fs.readFileSync("./ee.json"));

nunjucks.configure(".", { autoescape: true });

ee = ee.map((e) => {
  e.name = titleize(e.name);
  if (Object.keys(e.description).length == 0) {
    e.description = null;
    return e;
  }
  e.description = e.description.map((d) => d.text).join("\n\n");
  return e;
});

// Group anything that needs to be in tables
ee = ee.map((e) => {
  if (e.name == "Datastore") {
    const pgRows = [];
    const cRows = [];
    for (let v in e.vars) {
      if (/^pg_.+$/.test(v)) {
        pgRows.push({ name: v, ...e.vars[v] });
      }
      if (/^cassandra_.+$/.test(v)) {
        cRows.push({ name: v, ...e.vars[v] });
      }
    }
    e.vars = [];
    e.tables = [
      { title: "Postgres settings", rows: pgRows },
      { title: "Cassandra settings", rows: cRows },
    ];
  }
  return e;
});

const r = nunjucks.render("template.md", { items: ee, eeOnly: diff() });

fs.writeFileSync("configuration.md", r);
