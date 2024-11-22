import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate()
    const [value , setValue] = useState()

    const nav = ()=>{
        navigate("/")
    }

  return (
    <>
    <AppBar sx={{background: "#063970"}}>
        <Toolbar>
            <AddModeratorIcon/>
            <Tabs textColor='inherit' value={value} onChange={(e,value)=> setValue(value)} indicatorColor='secondary'>
                <Tab label='Home'/>
                <Tab label='Services'/>
                <Tab label='About'/>
                <Tab label='Setting'/>
            </Tabs>

            <Button onClick={nav} sx={{ml:'auto'}} variant='contained'>Log out</Button>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Dashboard