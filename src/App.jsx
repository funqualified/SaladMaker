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

import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

function App() {
  const [saladRules, setSaladRulesInternal] = useState({ excludedIngredients: [], saladProfile: [] });
  const [cookie, setCookie] = useCookies(["token", "id", "rules"]);
  const [username, setUsername] = useState("");
  const APIurl = process.env.REACT_APP_API_URL;

  const setSaladRules = (rules) => {
    setSaladRulesInternal(rules);
    setCookie("saladMaker_rules", rules);

    if (cookie.token) {
      fetch(`${APIurl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(JSON.stringify(rules)),
      });
    }
  };

  useEffect(() => {
    if (cookie.rules) {
      setSaladRulesInternal(JSON.parse(cookie.saladMaker_rules));
    }

    const token = cookie.token;
    const id = cookie.id;
    if (token) {
      fetch(`${APIurl}accounts?action=getAccountInfo&token=${token}&id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUsername(data.username);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [cookie, APIurl, setUsername, saladRules]);

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
            <Profile saladRules={saladRules} setSaladRules={setSaladRules} username={username} />
          </TabPanel>
        </Tabs>
      </Box>
    </CssVarsProvider>
  );
}

export default App;
