import { Alert, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Game } from "../../components/game/game.component";
import { Game as GameType} from "../../components/game/game.type";
import { Api } from "../../utils/api";
import { ApiRoutes } from "../../utils/api/routes";
import { CardContainer } from "./games.styles";

export const Games = () => {
    const [ games, setGames ] = useState<GameType[]>([]);
    const [ error, setError ] = useState<boolean>(false);
    const { t } = useTranslation();

    useEffect(() => {
        getGames();
    }, []);

    const handleRefresh = () => {
        getGames();
    };

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
                    <Game key={game.id} {...game} />
                </CardContainer>
            ))}
        </Container>
    );
};
