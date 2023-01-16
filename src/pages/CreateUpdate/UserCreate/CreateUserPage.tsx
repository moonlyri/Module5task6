import React, {ReactElement, FC} from "react";
import {
    Grid,
    TextField,
    Typography,
} from '@mui/material'
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { observer } from "mobx-react-lite";
import CreateUserStore from "./CreateUserStore";
import UserCreate from "./components/UserCreate";

const store = new CreateUserStore();

const CreateUserPage: FC<any> = (props): ReactElement => {
    return (
        <>
            {!!store.user.createdAt && (
                <>
                    <Grid
                        container
                        direction="row"
                        sx={{ textAlign: "center" }}
                        rowSpacing={{ xs: 5 }}
                    >
                        <Grid item xs={12}>
                            <UserCreate data={{ user: {id: store.user.id, name: store.user.name, job: store.user.job, createdAt: store.user.createdAt } }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" onClick={store.resetUser}>Create another user</Button>
                        </Grid>
                    </Grid>
                </>
            )}
            {!store.user.createdAt && (
                <Box component="form" onSubmit={(event) => {
                    event.preventDefault();
                    store.getDataForCreate()
                }} autoComplete="off">
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        rowSpacing={{ xs: 5 }}
                        sx={{ textAlign: "center" }}
                    >
                        <Grid item xs={12}>
                            <Typography color="primary.main" variant="h1">CREATE NEW USER</Typography>
                        </Grid>
                        <Grid item>
                            <TextField autoFocus label="User name" name='name' error={store.inputs.name === ""} helperText={store.inputs.name === "" ? 'Empty field' : ' '} onChange={(event) => store.changeUserName(event.target.value)} required variant="outlined" />
                        </Grid>
                        <Grid item>
                            <TextField label="User job" name='job' error={store.inputs.job === ""} helperText={store.inputs.job === "" ? 'Empty field' : ' '} onChange={(event) => store.changeUserJob(event.target.value)} required variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" type="submit">
                                SUBMIT
                            </Button>
                        </Grid>
                    </Grid>
                </Box>)}
        </>
    )
}

export default observer(CreateUserPage);