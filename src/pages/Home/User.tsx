import React, {ReactElement, FC} from "react";
import {Box, CircularProgress, Container, Grid, Pagination} from '@mui/material'
import UserCard from "./componentsuser";
import Home from "./Home";
import { observer } from "mobx-react-lite";

const store = new Home();

const Users: FC<any> = (): ReactElement => {
    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" my={4}>
                {store.isLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                        {store.users?.map((item) => (
                            <Grid key={item.id} item lg={2} md={3} xs={6}>
                                <UserCard {...item} relocation={`/user/${item.id}`} />
                            </Grid>
                        ))}
                    </>
                )}
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Pagination count={store.totalPages} page={store.currentPage} onChange={ (event, page)=> store.setCurrentPage(page)} />
            </Box>
        </Container>
    );
};

export default observer(Users);