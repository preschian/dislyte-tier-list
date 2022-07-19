import { DataGrid } from "@mui/x-data-grid";
import Image from "next/image";

import { tier } from "../script/scrap";
import result from "../script/result.json";

const columns = [
  {
    field: "esperName",
    headerName: "Esper",
    width: 160,
    renderCell: (params) => {
      const esper = result[params.value].esper;

      return (
        <>
          <div style={{ marginRight: 8 }}>
            <Image src={esper.image} alt={esper.name} height={40} width={40} />
          </div>

          {/* remove text between parentheses https://regex101.com/r/ZgviKX/1 */}
          <p>{esper.name.replace(/ *\([^)]*\) */g, "")}</p>
        </>
      );
    },
  },
  {
    field: "overall",
    headerName: "Overall",
    valueFormatter: (params) => tier[params.value],
  },
  {
    field: "story",
    headerName: "Story",
    valueFormatter: (params) => tier[params.value],
  },
  {
    field: "cube",
    headerName: "Cube",
    valueFormatter: (params) => tier[params.value],
  },
  {
    field: "kronos",
    headerName: "Kronos",
    valueFormatter: (params) => tier[params.value],
  },
  {
    field: "apep",
    headerName: "Apep",
    valueFormatter: (params) => tier[params.value],
  },
  {
    field: "fafnir",
    headerName: "Fafnir",
    valueFormatter: (params) => tier[params.value],
  },
  {
    field: "temporalTower",
    headerName: "Temporal Tower",
    valueFormatter: (params) => tier[params.value],
  },
  {
    field: "pointWarDef",
    headerName: "Point War (Def)",
    valueFormatter: (params) => tier[params.value],
  },
  {
    field: "pointWarAtk",
    headerName: "Point War (Atk)",
    valueFormatter: (params) => tier[params.value],
  },
  { field: "star", headerName: "Star" },
  { field: "role", headerName: "Role" },
];

const rows = Object.values(result);
const size = 10;
const height = 51 * (size + 3);

function Table() {
  return (
    <div style={{ height, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={size}
        rowsPerPageOptions={[size]}
        getRowId={(e) => e.esper.name}
      />
    </div>
  );
}

export default Table;
