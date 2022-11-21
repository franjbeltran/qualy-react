import { Alert, Button, Container } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { GameCard } from "../../components/gameCard/gameCard.component";
import { Game as GameType} from "../../components/gameCard/gameCard.type";
import { Api } from "../../utils/api";
import { ApiRoutes, Routes } from "../../utils/api/routes";
import { CardContainer } from "./games.styles";

export const Games = () => {
    const [ games, setGames ] = useState<GameType[]>([]);
    const [ error, setError ] = useState<boolean>(false);
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        getGames();
    }, []);

    const handleRefresh = () => {
        getGames();
    };

    const handleGame = (event: MouseEvent<HTMLButtonElement>) => {
        navigate(`${Routes.HOME}/`);
    }

    const getGames = () => {
        Api.get({ endpoint: ApiRoutes.GAMES}).then((result) => {
            setError(false);
            setGames(result.data);
        }).catch(() => {
            setError(true);
        });
    }

    return (
        <Container>
            { error && (
                <Alert severity="error" action={
                    <Button onClick={handleRefresh}>
                        {t('games.message.refresh')}
                    </Button>
                }>
                    {t('games.message.error')}
                </Alert>
            )}
            { games.map((game: GameType) => (
                <CardContainer>
                    <GameCard key={game.id} {...game} handleClick={handleGame}/>
                </CardContainer>
            ))}
        </Container>
    );
};
