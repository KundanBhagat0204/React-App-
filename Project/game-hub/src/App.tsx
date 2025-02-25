import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./Component/NavBar";

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" " main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show when={isLargeScreen}>
          <GridItem area="aside" bg="gold" p={4}>
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
