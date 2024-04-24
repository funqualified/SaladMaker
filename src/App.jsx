//import "./App.css";
import Maker from "./Maker";
import Profile from "./Profile";

import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Box from "@mui/joy/Box";

import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";

import { useState } from "react";

function App() {
  //TODO: rules should be stored in a database
  const [saladRules, setSaladRules] = useState({ excludedIngredients: [], saladProfile: [] });

  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Collapsed-breakpoint": "769px", // form will stretch when viewport is below `769px`
            "--Cover-width": "50vw", // must be `vw` only
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s", // set to `none` to disable transition
          },
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <h1>Salad Maker</h1>
        <Tabs defaultValue={0}>
          <TabList>
            <Tab>Make</Tab>
            <Tab>Personalize</Tab>
          </TabList>
          <TabPanel value={0}>
            <Maker saladRules={saladRules} />
          </TabPanel>
          <TabPanel value={1}>
            <Profile saladRules={saladRules} setSaladRules={setSaladRules} username="TODO:login here" />
          </TabPanel>
        </Tabs>
      </Box>
    </CssVarsProvider>
  );
}

export default App;
