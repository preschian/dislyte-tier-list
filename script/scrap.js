// source: https://www.game.guide/dislyte-tier-list
const dislyte = {};
const column = [
  "esper",
  "overall",
  "story",
  "cube",
  "kronos",
  "apep",
  "fafnir",
  "temporalTower",
  "pointWarDef",
  "pointWarAtk",
  "pointWarRating",
  "star",
  "role",
];
export const tier = [
  "S+",
  "S",
  "S-",
  "A+",
  "A",
  "A-",
  "B+",
  "B",
  "B-",
  "C+",
  "C",
  "C-",
  "D+",
  "D",
  "D-",
];

document.querySelectorAll(".foo_table_39396 tbody tr").forEach((value, key) => {
  // if (key === 0) {
  value.querySelectorAll("td").forEach((esper, k) => {
    const esperName = value.querySelector("td").innerText.trim();
    const text = esper.innerText.trim();

    if (k === 0) {
      const esperImage = esper.querySelector("img").getAttribute("src");

      dislyte[esperName] = {
        esper: {
          name: esperName,
          image: esperImage,
        },
      };
    } else {
      const tierIndex = tier.indexOf(text);

      dislyte[esperName][column[k]] = tierIndex >= 0 ? tierIndex : text;
    }
  });
  // }
});

console.log(dislyte);
