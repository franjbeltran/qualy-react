import { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import { User as UserType } from '../../contexts/user/user.type';

import { Avatar, Button, IconButton, StyledEngineProvider, Tooltip, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { AppBarContainer, AvatarContainer, LogoutButton, TitleContainer } from './header.styles';
import { defaultUser } from '../../contexts/user/data';

const Header = () => {
   const { user, setUser } = useContext(UserContext);
   const { t } = useTranslation();

   const getInitialLetter = () => user.name.slice(0, 1).toUpperCase();

   const handleLogout = () => {
      setUser(defaultUser);
   }

   return (
      <StyledEngineProvider injectFirst>
         <AppBarContainer position='static'>
               <TitleContainer>
                  <Typography variant="h4">
                     {t('header.title')}
                  </Typography>
               </TitleContainer>
               { user.logged && (
                  <AvatarContainer>
                     <LogoutButton onClick={handleLogout}>
                        {t('header.logout')}
                     </LogoutButton>
                     <Tooltip title={t('header.avatar.tooltip')}>
                        <IconButton>
                           <Avatar>
                              {getInitialLetter()}
                           </Avatar>
                        </IconButton>
                     </Tooltip>
                  </AvatarContainer>
               )}
         </AppBarContainer>
      </StyledEngineProvider>
   );
};

export default Header;
