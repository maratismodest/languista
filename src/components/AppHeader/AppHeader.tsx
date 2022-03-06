import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AppHeader = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to={ROUTES.main}> <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        Languista
                    </Typography></Link>
                    <Link to={ROUTES.profile}> <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        Profile
                    </Typography></Link>
                    <Link to={ROUTES.add}> <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        Add
                    </Typography></Link>
                    <Link to={ROUTES.translate}> <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        Translate
                    </Typography></Link>

                    <Link to={ROUTES.main}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{mr: 2,flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                        >
                            Languista
                        </Typography>
                    </Link>
                    <Link to={ROUTES.profile}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{mr: 2,flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                        >
                            Profile
                        </Typography>
                    </Link>
                    <Link to={ROUTES.add}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{mr: 2,flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                        >
                            Add
                        </Typography>
                    </Link>
                    <Link to={ROUTES.translate}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{mr: 2,flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                        >
                            Translate
                        </Typography>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppHeader
