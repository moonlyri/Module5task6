import {Card, CardActionArea, CardActions, CardContent, CardMedia, ThemeProvider, Typography} from "@mui/material"
import {FC, ReactElement} from "react";
import {IResource} from "../../../interfaces/resources";
import {useNavigate} from "react-router-dom";
import {createTheme} from "@mui/material/styles";

const ResourceCard: FC<IResource> = (props): ReactElement => {

    const navigate = useNavigate()

    return (
        <Card style={{backgroundColor:props.color}} sx={{ maxWidth: 250 }}>
            <CardActionArea onClick={() => navigate(`/resource/${props.id}`)}>
                <CardContent>
                    <Typography noWrap gutterBottom variant="h6" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.year} {props.color} {props.pantone_value}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ResourceCard