import React, {useMemo, useState} from 'react';
import checkMobile from "helpers/checkMobile";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link, useNavigate} from "react-router-dom";
import {ROUTES} from "routes";
import Button from "@mui/material/Button";
import {Menu, MenuItem} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import './AppHeader.css'
import IconButton from "@mui/material/IconButton";

const AppHeader = () => {
    let navigate = useNavigate()
    const isMobile = useMemo(checkMobile, []);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleWords = () => {
        setAnchorEl(null);
        navigate(ROUTES.words)
    }
    const handlePhrases = () => {
        setAnchorEl(null);
        navigate(ROUTES.phrases)
    }
    const handleProfile = () => {
        setAnchorEl(null);
        navigate(ROUTES.profile)
    }
    const handleDictaphone = () => {
        setAnchorEl(null);
        navigate(ROUTES.dictaphone)
    }
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 'auto' }}
                    >
                        <LanguageIcon/>
                    </IconButton>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        variant='contained'
                    >
                        Menu
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleWords}>Words</MenuItem>
                        <MenuItem onClick={handlePhrases}>Phrases</MenuItem>
                        <MenuItem onClick={handleDictaphone}>Dictaphone</MenuItem>
                        <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default AppHeader
