import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const linkArr = ["home", "posts", "login"]
const loggedInLinkArr = ["home", "posts", "add", "profile"]
const Header = () => {
    const islogin = useSelector((state) => state.login);
    const [tabValue, settabValue] = useState(0);
    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#1a8cff" }}>
            <Toolbar><Typography>Social App</Typography>
                <Tabs value={tabValue} indicatorColor="primary" textColor='secondary' sx={{ ml: "auto" }} onChange={(e, val) => settabValue(val)}>
                    {
                        islogin ? loggedInLinkArr.map((link) => <Tab
                            LinkComponent={Link} to={`/${link === 'home' ? "" : link}`}
                            sx={{ color: "#ffffff" }}
                            key={link} label={link} />) :
                            linkArr.map((link) => <Tab
                                LinkComponent={Link} to={`/${link === 'home' ? "" : link}`}
                                sx={{ color: "#ffffff" }}
                                key={link} label={link} />)
                    }
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Header
