#!/usr/bin/env /usr/local/bin/node

//<bitbar.title>Covid-19 Costa Rica Tracker</bitbar.title>
//<bitbar.version>v1.0</bitbar.version>
//<bitbar.author>Bryan Morales</bitbar.author>
//<bitbar.author.github>bryandms</bitbar.author.github>
//<bitbar.desc>Track number of corona virus cases in Costa Rica from your status bar</bitbar.desc>
//<bitbar.dependencies>node</bitbar.dependencies>
//<bitbar.image>https://github.com/bryandms/covid-19costaricatracker/blob/master/media/zoomedpreview.png</bitbar.image>
//<bitbar.abouturl>https://github.com/bryandms/covid-19costaricatracker/blob/master/README.md</bitbar.abouturl>

const https = require("https");
const countryName = "cr"; // Costa Rica
const icon =
  "iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAAEhyb7BAAAAAXNSR0IArs4c6QAAAdlJREFUOBGFkzFLHFEQgFeFeBowalAJnB4kIFpIuN+QcEmRziJ10mhpGkGwtEkgfQqv8RdYCkqKgHiNZcQmVa46MCoREaIx3/d8b9nDjQ58O/PmzZudfTObZTfySNUDGp+gAkE2kqFu9PG4ho6xz+BcI4k7U/BARwOq8BnceAJdUiuullkYlY1E4yw59P6G1xCOPMZoQak8xGuKv+DJTfBAEDeVY3BzAUx9CXlGT1qNm6kI3+2BIBZhWh1/otbW/x5KZRhvs3QnOivoCzCTJQTpTUbUH9D9MAhfIQ/EzpZgDn7ARzCT3VGHVy9i7EWHzqfRfht1HZ2NxsU4ej3a81G/QwdZ4WmGL3AAY3AEv2AWgpzyNKhIm/XLsFt4GGjG57AKtwLw3Sl+2DZY+y6YzOE0cd587P+KV/cTirdzxbpYui03YQ1KZQiv978GHvwG3uIheFGTkBJaoT9ILrbfCtwwgU1MwQamVnzHnijseWdBHDDvIM1QqsBJMIHN3gf9HbBlW3HdQnvxbyCMipdooHcwAH5CqiYlcCimwb7ra8MJvIBc7IJDasAOVMGZ9BMcu1SB+w6Pf2ZXAtZBUhvtQkrooYSf4HhawQzcK7UY8QrdjHYdHe4grkvVP0xXjBIOIZS9AAAAAElFTkSuQmCC";

showCountryData(countryName);

/**
 * Shows covid status information in a country
 * @param {String} countryName
 */
function showCountryData(countryName) {
  const apiURL = `https://corona.lmao.ninja/v2/countries/${countryName}`;

  https
    .get(apiURL, (res) => {
      let body = "";

      res.on("data", (data) => {
        body += data;
      });

      res.on("end", () => {
        let apiData = JSON.parse(body);

        console.log(`${apiData.cases} | templateImage=${icon}`);
        console.log("---");
        console.log(`Covid cases in ${apiData.country}`);
        console.log("---");
        console.log("Cases:", apiData.cases.format());
        console.log("Today's cases:", apiData.todayCases.format());
        console.log("Recovered:", apiData.recovered.format());
        console.log("Deaths:", apiData.deaths.format());
        console.log("Today's deaths:", apiData.todayDeaths.format());
        console.log("Active:", apiData.active.format());
        console.log("Critical:", apiData.critical.format());
        console.log("---");
        showWorldData();
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

/**
 * Shows covid status information in the world
 */
function showWorldData() {
  const apiURL = "https://corona.lmao.ninja/v2/all";

  https
    .get(apiURL, (res) => {
      let body = "";

      res.on("data", (data) => {
        body += data;
      });

      res.on("end", () => {
        let apiData = JSON.parse(body);

        console.log("Covid cases in the world");
        console.log("---");
        console.log("Cases:", apiData.cases.format());
        console.log("Recovered:", apiData.recovered.format());
        console.log("Deaths:", apiData.deaths.format());
        console.log("---");
        console.log("Data source | href=https://github.com/NovelCOVID/API");
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

/**
 * Format number
 */
Number.prototype.format = function () {
  return new Intl.NumberFormat("fr-FR").format(this);
};
