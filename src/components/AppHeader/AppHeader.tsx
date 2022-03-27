import * as React from 'react';
import {useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {ROUTES} from "../../routes";


export default function AppHeader() {
    let navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMain = () => {
        navigate(ROUTES.main)
        handleClose()
    }

    const handleProfile = () => {
        navigate(ROUTES.profile)
        handleClose()
    }

    const handleWords = () => {
        navigate(ROUTES.words)
        handleClose()
    }

    const handlePhrases = () => {
        navigate(ROUTES.phrases)
        handleClose()
    }

    const handleDictaphone = () => {
        navigate(ROUTES.dictaphone)
        handleClose()
    }

    return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 'auto'}}
                        onClick={handleMain}
                    >
                        <LanguageIcon/>
                    </IconButton>


                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleProfile}>Profile</MenuItem>
                        <MenuItem onClick={handleWords}>Words</MenuItem>
                        <MenuItem onClick={handlePhrases}>Phrases</MenuItem>
                        <MenuItem onClick={handleDictaphone}>Dictaphone</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
    );
}