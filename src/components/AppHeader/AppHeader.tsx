import * as React from 'react';
import {useNavigate} from "react-router-dom";
import useDetectBrowser from "helpers/useDetectBrowser";
import {ROUTES} from "routes";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function AppHeader() {
    const browserName = useDetectBrowser();
    let navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    color="inherit"
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleWords}>Words</MenuItem>
                    <MenuItem onClick={handlePhrases}>Phrases</MenuItem>
                    {browserName !== 'Safari' && <MenuItem onClick={handleDictaphone}>Dictaphone</MenuItem>}
                </Menu>
            </Toolbar>
        </AppBar>
    );
}