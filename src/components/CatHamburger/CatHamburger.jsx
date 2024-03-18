 import styles from "./CatHamburger.module.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import symboldefs from '../../images/symbol-defs.svg'

import { useState } from "react";

function CatHamburger() {
const catList = ['Home', 'Furniture', 'Kitchen & Dining', 'Electronics', 'Video Games']
 const [open, setOpen] = useState(false);

    const toggleDrawer = () => {

    setOpen(!open);
  };

    
    const DrawerList = (

    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {catList.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
  );

    return (
        <>
     <Button onClick={toggleDrawer}><svg className={`${styles.svgimage}  `} >
       <use href={`${symboldefs}#icon-hamburger`} /> 
                    </svg></Button>
      <Drawer open={open} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
        </>
    )
}

 export default CatHamburger