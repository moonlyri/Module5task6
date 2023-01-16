import React, {ReactElement, FC} from "react";
import {
    Grid,
    TextField,
    Typography,
} from '@mui/material'
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { observer } from "mobx-react-lite";
import UpdateUserStore from "./UpdateUserStore";
import UserUpdate from "./components/UserUpdate";

const store = new UpdateUserStore();

const UpdateUserPage: FC<any> = (props): ReactElement => {
    return (
        <>
            {!!store.user.updatedAt && (
                <>
                    <Grid
                        container
                        direction="row"
                        sx={{ textAlign: "center" }}
                        rowSpacing={{ xs: 5 }}
                    >
                        <Grid item xs={12}>
                            <UserUpdate data={{ id: store.id, user: { name: store.user.name, job: store.user.job, updatedAt: store.user.updatedAt } }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" onClick={store.resetUser}>Update another user</Button>
                        </Grid>
                    </Grid>
                </>
            )}
            {!store.user.updatedAt && (
                <Box component="form" onSubmit={(event) => {
                    event.preventDefault();
                    store.getDataForUpdate()
                }} autoComplete="off">
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        rowSpacing={{ xs: 5 }}
                        sx = {{textAlign: "center"}}
                    >
                        <Grid item xs={12}>
                            <Typography color="primary.main" variant="h1">UPDATE OLD USER</Typography>
                        </Grid>
                        <Grid item>
                            <TextField autoFocus label="User id" name='id' error={store.id === ""} helperText={store.id === "" ? 'Empty field' : ' '} onChange={(event) => store.changeUserId(event.target.value)} required variant="outlined"/>
                        </Grid>
                        <Grid item>
                            <TextField label="User name" name='name' error={store.inputs.name === ""} helperText={store.inputs.name === "" ? 'Empty field' : ' '} onChange={(event) => store.changeUserName(event.target.value)} required variant="outlined"/>
                        </Grid>
                        <Grid item>
                            <TextField label="User job" name='job' error={store.inputs.job === ""} helperText={store.inputs.job === "" ? 'Empty field' : ' '} onChange={(event) => store.changeUserJob(event.target.value)} required variant="outlined"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" type="submit">
                                SUBMIT
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    )
}

export default observer(UpdateUserPage);