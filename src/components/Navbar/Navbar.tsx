import React, { FC, ReactElement, useContext } from "react";
import {
    Box,
    Link,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Tooltip,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';
import TokenIcon from '@mui/icons-material/Token';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import { routes } from "../../routes";
import { NavLink, useNavigate} from "react-router-dom";
import { AppStoreContext } from "../../App";
import { observer } from "mobx-react-lite";

const Navbar: FC = (): ReactElement => {
    const navigate = useNavigate();
    const appStore = useContext(AppStoreContext);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [accountAnchorElNav, setAccountAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenAccountMenu = (event: any) => {
        setAccountAnchorElNav(event.currentTarget);
    };

    const handleCloseAccountMenu = () => {
        setAccountAnchorElNav(null);
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "secondary.main",
                color: "white"
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: "none", lg: "flex" },
                        }}
                    >
                        @moonlyri
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", lg: "none" },
                            }}
                        >
                            {routes.map((page) => (page.enabled && <Link
                                key={page.key}
                                component={NavLink}
                                to={page.path}
                                color="black"
                                underline="none"
                                variant="button"
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            </Link>))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}
                    >
                        @moonlyri
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                marginLeft: "1rem",
                            }}
                        >
                            {routes.map((page) => (page.enabled && <Link
                                key={page.key}
                                component={NavLink}
                                to={page.path}
                                color="white"
                                underline="none"
                                variant="button"
                                sx={{fontSize: "large", marginLeft: "2rem"}}
                            >
                                {page.title}
                            </Link>))}
                        </Box>
                    </Box>
                    <>
                        <Tooltip title="Account settings">
                            <IconButton
                                size="large"
                                aria-label="account"
                                aria-controls="account-appbar"
                                color={!!appStore.authStore.token ? "success" : "inherit"}
                                onClick={(event) => { handleOpenAccountMenu(event) }}
                            >
                                <AccountCircleIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="account-appbar"
                            anchorEl={accountAnchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(accountAnchorElNav)}
                            onClose={() => { handleCloseAccountMenu() }}
                            sx={{
                                display: { xs: "block"},
                            }}
                        >
                            {!!appStore.authStore.token && (
                                <div>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <TokenIcon fontSize="small"/>
                                        </ListItemIcon>
                                        <ListItemText primary={appStore.authStore.token} />
                                    </MenuItem>
                                    {!!appStore.authStore.id && (
                                        <MenuItem>
                                            <ListItemIcon>
                                                <FingerprintIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={appStore.authStore.id} />
                                        </MenuItem>
                                    )}
                                    <MenuItem onClick={() => {
                                        handleCloseAccountMenu();
                                        appStore.authStore.logout();
                                    }}>
                                        <ListItemIcon>
                                            <LogoutIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Logout" />
                                    </MenuItem>
                                </div>
                            )}
                            {!appStore.authStore.token && (
                                <MenuItem onClick={() => {
                                    handleCloseAccountMenu();
                                    navigate("/authentication");
                                }}>
                                    <ListItemIcon>
                                        <LoginIcon fontSize="small"/>
                                    </ListItemIcon>
                                    <ListItemText primary="Sign in" />
                                </MenuItem>
                            )}
                        </Menu>
                    </>
                </Toolbar>
            </Container>
        </Box>
    );
};

export default observer(Navbar);