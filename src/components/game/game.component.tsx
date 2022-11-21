import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../utils/api/routes";
import { CardMediaContainer } from "./game.styles";
import { Game as GameType } from "./game.type";

export const Game = ({ id, name, image }: GameType) => {
    const navigate = useNavigate();

    const handleGame = () => {
        navigate(`${Routes.GAMES}/${id}`);
    }

    return (
        <Card>
            <CardMediaContainer>
                <CardMedia component='img' alt='' image={image} />
            </CardMediaContainer>
            <CardContent>
                <Typography variant="h4">
                    <Button variant="text" onClick={handleGame}>
                        {name}
                    </Button>
                </Typography>
            </CardContent>
        </Card>
    );
}