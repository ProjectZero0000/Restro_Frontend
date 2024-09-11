import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import { Outlet } from 'react-router-dom';

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
        <Sidebar open={open}/>
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, ml: 1 }}>
          <Outlet/>
        </Box>
      </Box>
    </>

  );
}
