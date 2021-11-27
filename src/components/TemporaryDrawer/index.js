import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@chakra-ui/button";
import { useState } from "react";


import SmallRow from "../SmallRow"


export default function TemporaryDrawer({ compare, key }) {
  const [state, setState] = useState({
    bottom: false,
  });
  const [text, setText] = useState("Add to Compare");
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    setText("Remove");
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     {compare.map((item) => {
                  return (
                    <>
                      <SmallRow
                        imgSrc={item.provider_logo_image_url}
                        name={item.provider_name}
                        type={item.deal_name}
                      />
                    </>
                  );
                })}
      
    </Box>
  );
  return (
    <div>
      <React.Fragment key={"bottom"}>
        <Button onClick={toggleDrawer("bottom", true)}>{text}</Button>
        <Drawer
          anchor="bottom"
          open={state.bottom}
          onClose={toggleDrawer("bottom", false)}
        >
          {list("bottom")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}