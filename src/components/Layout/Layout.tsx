import React, { FC, ReactNode } from "react";
import { Box, CssBaseline, Grid} from "@mui/material";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Box>
            <CssBaseline />
            <Grid container direction="column" justifyContent="space-between" alignItems="stretch"
                  sx={{
                      minHeight: "100vh",
                      maxWidth: "100vw",
                  }}>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={12}>
                    {children}
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Layout;