//import "./App.css";
import Maker from "./Maker";
import Profile from "./Profile";

import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Box from "@mui/joy/Box";

import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import InfoIcon from "@mui/icons-material/Info";

import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";

import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Button, Link } from "@mui/joy";

function App() {
  const [saladRules, setSaladRulesInternal] = useState({ excludedIngredients: [], saladProfile: [] });
  const [cookie, setCookie] = useCookies(["token", "id", "rules"]);
  const [username, setUsername] = useState("");
  const [initialized, setInitialized] = useState(false);
  const [infoOpen, setinfoOpen] = useState(false);
  const APIurl = import.meta.env.VITE_APP_API_URL;

  const setSaladRules = (rules) => {
    setSaladRulesInternal(rules);
    setCookie("saladMaker_rules", rules);

    if (cookie.token) {
      fetch(`${APIurl}salad?action=updateUserSaladProfile&token=${cookie.token}&id=${cookie.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profile: rules }),
      });
    }
  };

  const sendAnonymousRule = (rule) => {
    fetch(`${APIurl}salad?action=anonymousSaladRule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rule: rule }),
    });
  };

  useEffect(() => {
    if (initialized) {
      return;
    }
    setInitialized(true);

    var rules = {
      excludedIngredients: [],
      saladProfile: [],
      favoriteIngredients: [],
      favoriteSalads: [],
    };
    if (cookie.saladMaker_rules) {
      rules = { ...rules, ...cookie.saladMaker_rules };
    } else {
      setinfoOpen(true);
    }

    const token = cookie.token;
    const id = cookie.id;
    if (token && username === "") {
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

      fetch(`${APIurl}salad?action=getUserSaladProfile&token=${token}&id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          rules = { ...rules, ...data };
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    setSaladRulesInternal(rules);
  }, [initialized]);

  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <InfoIcon onClick={() => setinfoOpen(true)} style={{ position: "fixed", top: "10px", left: "10px", borderRadius: "50%" }} />
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
        <Modal open={infoOpen} onClose={() => setinfoOpen(false)}>
          <ModalDialog>
            <ModalClose />
            <Typography level="h1">Welcome to the Salad Maker</Typography>
            <Typography>
              Salad Maker is a project by Ryan Lindemulder for Funqualified. It began with TikToks of him making unusual salads. Now this web app is here for
              him and others to get crazy salad recipes.
            </Typography>
            <Typography>Click the tabs to make a salad or personalize your salad profile.</Typography>
            <Typography>
              <Link href="https://app.funqualified.com/dashboard/login?redirect=https://app.funqualified.com/salad">Signing in</Link> to an account will let you
              use your salad profile from any device.
              {/*TODO: add this text: You can also save your favorite salads.  */}
            </Typography>
          </ModalDialog>
        </Modal>
        <h1>Salad Maker</h1>
        <Tabs defaultValue={0}>
          <TabList>
            <Tab>Make</Tab>
            <Tab>Personalize</Tab>
          </TabList>
          <TabPanel value={0}>
            <Maker saladRules={saladRules} setSaladRules={setSaladRules} sendSalad={sendAnonymousRule} username={username} />
          </TabPanel>
          <TabPanel value={1}>
            <Profile saladRules={saladRules} setSaladRules={setSaladRules} sendRule={sendAnonymousRule} username={username} />
          </TabPanel>
        </Tabs>
      </Box>
    </CssVarsProvider>
  );
}

export default App;
