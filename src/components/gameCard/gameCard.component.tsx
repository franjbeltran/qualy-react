import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardMediaContainer } from "./gameCard.styles";
import { Game as GameType } from "./gameCard.type";

export const GameCard = ({ id, name, image, handleClick }: GameType) => {
    return (
        <Card>
            <CardMediaContainer>
                <CardMedia data-testid='card-media' component='img' alt='' image={image} />
            </CardMediaContainer>
            <CardContent>
                <Typography variant="h4">
                    <Button data-testid='button-game' variant="text" onClick={handleClick}>
                        {name}
                    </Button>
                </Typography>
            </CardContent>
        </Card>
    );
}