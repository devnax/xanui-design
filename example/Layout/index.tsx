import * as React from "react";
import DarkModeIcon from "@xanui/icons/DarkMode";
import LightModeIcon from "@xanui/icons/LightMode";
import Stack from "@xanui/ui/Stack";
import ViewBox from "@xanui/ui/ViewBox";
import IconButton from "@xanui/ui/IconButton";
import Text from "@xanui/ui/Text";
import List from "@xanui/ui/List";
import ListItem from "@xanui/ui/ListItem";
import menu from "./menus";
import CheckIcon from "@xanui/icons/CheckCircle";
import { AppRoot, createTheme, Transition, useTheme } from "@xanui/core";
import { AuthProvider } from "./AuthProvider";

const ThemeBox = () => {
   const theme = useTheme();

   return (
      <Stack
         direction={"row"}
         alignItems={"center"}
         gap={1}
         p={1}
         borderTop={"1px solid"}
         borderColor="default.divider"
      >
         <IconButton
            onClick={() => {
               theme.change(theme.name === "light" ? { mode: "dark" } : {});
            }}
         >
            {theme.name === "light" ? <DarkModeIcon /> : <LightModeIcon />}
         </IconButton>
         <Text
            variant="text"
            onClick={() => {
               theme.change(theme.name === "light" ? { mode: "dark" } : {});
            }}
            cursor="pointer"
         >
            Switch Theme
         </Text>
      </Stack>
   );
};

const Layout = () => {
   const [, dispatch] = React.useState(0);
   const currentMenuIndex = parseInt(
      localStorage.getItem("currentMenuIndex") || "0",
   );
   const currentMenu = menu[currentMenuIndex];
   const Render: any = currentMenu?.render || (() => <></>);
   const [theme, setTheme] = React.useState<any>({ mode: "dark" });

   React.useEffect(() => {
      const ele = document.getElementById(`menu-${currentMenuIndex}`);
      if (ele) {
         ele.scrollIntoView();
      }
   }, []);

   return (
      <AuthProvider value={{ auth: "nax" }}>
         <AppRoot theme={theme} onThemeChange={(t) => setTheme(t)}>
            <Stack height="100vh" flexRow>
               {/* Sidebar */}
               <ViewBox
                  width={250}
                  height="100%"
                  endContent={<ThemeBox />}
                  borderRight={"1px solid"}
                  borderColor="default.divider"
               >
                  <Text
                     p={1}
                     variant="text"
                     fontWeight={600}
                     mb={2}
                     color="default.contrast"
                  >
                     Components
                  </Text>
                  <List p={1} variant="fill">
                     {menu.map((m, idx) => (
                        <ListItem
                           key={m.label}
                           radius={1}
                           selected={currentMenuIndex === idx}
                           onClick={() => {
                              localStorage.setItem(
                                 "currentMenuIndex",
                                 idx.toString(),
                              );
                              dispatch(Math.random());
                           }}
                           endIcon={
                              <CheckIcon
                                 color={m.done ? "success" : "success.ghost"}
                                 fontSize={20}
                              />
                           }
                        >
                           {m.label}
                        </ListItem>
                     ))}
                  </List>
               </ViewBox>
               <Stack flex={1} height="100%" p={2} overflow="auto">
                  <Render />
               </Stack>
            </Stack>
         </AppRoot>
      </AuthProvider>
   );
};

export default Layout;
