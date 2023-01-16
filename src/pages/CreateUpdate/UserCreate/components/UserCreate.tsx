import { Card, CardActionArea, CardContent, Typography, Container, Grid } from "@mui/material";
import { FC, ReactElement } from "react";
import { useNavigate} from "react-router-dom";
import { ICreateResponse } from "../../../../interfaces/UserResponse/createresponse";
import { observer } from "mobx-react-lite";

const UserCreate: FC<ICreateResponse | any> = (props): ReactElement => {
    const navigate = useNavigate();

    return (
        <Container>
            <Grid container  justifyContent="center" alignItems="center">
                <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea onClick={() => navigate("/users/")} >
                        <CardContent>
                            <Typography noWrap gutterBottom variant="h6" component="div">
                                {props.data.user.name} {props.data.user.job}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.data.user.id} {props.data.user.createdAt}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Container>
    )
}

export default observer(UserCreate);