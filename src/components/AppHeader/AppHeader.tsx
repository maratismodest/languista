import React, {useContext, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";
import {ROUTES} from "routes";
import Button from "@mui/material/Button";
import {Menu, MenuItem} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import AppContext from "context/AppContext";

const AppHeader = () => {
    const {setState} = useContext(AppContext)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleEngRus = () => {
        setAnchorEl(null);
        setState(true)

    };
    const handleRusEng = () => {
        setAnchorEl(null);
        setState(false)

    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to={ROUTES.main}>
                        <LanguageIcon  sx={{mr: 2, display: {xs: 'flex', md: 'flex'}}} />
                    </Link>
                    <Link to={ROUTES.words}> <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'flex', md: 'flex'}}}
                    >
                        Words
                    </Typography></Link>
                    <Link to={ROUTES.phrases}> <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'flex', md: 'flex'}}}
                    >
                        Phrases
                    </Typography></Link>
                    <Link to={ROUTES.profile}> <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'flex', md: 'flex'}}}
                    >
                        Profile
                    </Typography></Link>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        variant='contained'
                    >
                        Change
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
                        <MenuItem onClick={handleEngRus}>Eng-Rus</MenuItem>
                        <MenuItem onClick={handleRusEng}>Rus-Eng</MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default AppHeader
