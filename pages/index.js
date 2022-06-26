import dynamic from "next/dynamic";
import { StyledEngineProvider } from "@mui/material/styles";

const Table = dynamic(() => import("../components/table"), {
  ssr: false,
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Table />
    </StyledEngineProvider>
  );
}

export default App;
