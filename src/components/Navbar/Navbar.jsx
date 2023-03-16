import UserMenu from 'components/Navbar/UserMenu/UserMenu';
import UserAuth from './UserAuth/UserAuth';
import { useAuth } from 'hooks/useAuth';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useColorMode, Switch } from '@chakra-ui/react';
import css from '../Navbar/Navbar.module.css';
import Navigation from './Navigation/Navigation';

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isChecked = colorMode === 'dark';

  return (
    <Switch
      colorScheme="blue"
      marginLeft="20px"
      isChecked={isChecked}
      onChange={toggleColorMode}
      icons={{
        checked: <MoonIcon />,
        unchecked: <SunIcon />,
      }}
    ></Switch>
  );
}

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <UserAuth />}
      <ThemeSwitcher />
    </header>
  );
};
export default Navbar;

// @import url("https://fonts.googleapis.com/css2?family=Material+Icons");

// .material-icons {
//   font-family: "Material Icons";
//   font-weight: normal;
//   font-style: normal;
//   font-size: 24px;
//   line-height: 1;
//   letter-spacing: normal;
//   text-transform: none;
//   display: inline-block;
//   white-space: nowrap;
//   word-wrap: normal;
//   direction: ltr;
//   -webkit-font-feature-settings: "liga";
//   -webkit-font-smoothing: antialiased;
// }

// import { SunIcon, MoonIcon } from '@chakra-ui/icons';

// function ThemeSwitcher() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const isChecked = colorMode === 'dark';

//   return (
//     <Switch
//       marginLeft="20px"
//       isChecked={isChecked}
//       onChange={toggleColorMode}
//       icons={{
//         checked: <MoonIcon as={MaterialIcon} className="material-icons" />,
//         unchecked: <SunIcon as={MaterialIcon} className="material-icons" />,
//       }}
//     ></Switch>
//   );
// }
