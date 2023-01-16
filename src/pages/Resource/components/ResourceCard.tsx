import {Card, CardActionArea, CardContent, Typography} from "@mui/material"
import {FC, ReactElement, useState} from "react";
import {IResource} from "../../../interfaces/resources";
import {useNavigate} from "react-router-dom";


const ResourceCard: FC<IResource | any> = (props): ReactElement => {

    const navigate = useNavigate();
    let [isActive, setIsActive] = useState(false);
    const card = (<Card style={{backgroundColor:props?.color}} sx={{ maxWidth: 250 }}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            setIsActive(current => !current);
                        }}>
        <CardActionArea onClick={() => navigate(props.relocation)}>
            <CardContent>
                <Typography noWrap>
                    {props.name}, {props.color}
                </Typography>
                <Typography noWrap>
                    {props.year}, {props.pantone_value}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>);

    return (card);
}

export default ResourceCard;