import LogOutButton from "./Buttons/LogOutButton";
import { 
    Nav,
    Bars,
    NavMenu,
    NavLink
} from "./NavBarElements";

const NavBar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/home' activeStyle> Home </NavLink>
		<NavLink to='/logout' activeStyle> <LogOutButton/> </NavLink>
		<NavLink to='/login' activeStyle> Log In </NavLink>
		<NavLink to='/page1' activeStyle> Page 1 </NavLink>
		</NavMenu>

	</Nav>
	</>
);
};

export default NavBar;