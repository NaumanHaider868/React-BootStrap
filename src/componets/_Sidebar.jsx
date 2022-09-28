import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react'
// import SidebarMenu from 'react-bootstrap-sidebar-menu';

function _Sidebar() {
  return (
    <>
    <Box style={{width:'25%', backgroundColor:'#fff', boxShadow: '0.5px 0px #888888',height:'577px'}}>
    <List>
      
      {/* DashBoard */}
      <ListItem disablePadding style={{marginTop:'25px'}}>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="DashBoard" />
        </ListItemButton>
      </ListItem>

      {/* Job Listing */}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Job Listing" />
        </ListItemButton>
      </ListItem>

      {/* Reports */}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
      </ListItem>


      {/* Setting */}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
      </List>
    </Box>
    </>
  )
}

export default _Sidebar