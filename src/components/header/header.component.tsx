import { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import { User as UserType } from '../../contexts/user/user.type';

const Header = () => {
   const { user }: { user: UserType } = useContext(UserContext);
   return (
      <div>
         {user.name}
      </div>
   );
};

export default Header;
