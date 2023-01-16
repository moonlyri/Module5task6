import React, {ReactElement, FC} from "react";
import { Box, CircularProgress, Container, Grid, Pagination } from '@mui/material';
import ResourceCard from "./components";
import ResourceShowingStore from "./ResourcePage";
import { observer } from "mobx-react-lite";

const store = new ResourceShowingStore();

const Resource: FC<any> = (): ReactElement => {
    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" my={4}>
                {store.isLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                        {store.resources?.map((item) => (
                            <Grid key={item.id} item lg={2} md={3} xs={6}>
                                <ResourceCard {...item} relocation={`/unknown/${item.id}`} />
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

export default observer(Resource);