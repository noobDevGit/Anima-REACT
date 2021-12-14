import { Nav,
        Logo,
        Ul,
        Li,
    SearchBar,
    CustomInput,
    PhoneMenuContainer,
    Menu,
    MenuSearch} from "./HeaderElements"
import logo  from "../../logo/logo.png"




export const Header = () => {
    return (
            <Nav>
                <Logo src={logo} />
                <Ul>
                    <Li>Anime</Li>
                    <Li>Manga</Li>
                </Ul>
               <SearchBar>
                   <CustomInput type='text' placeholder='Search'/>
               </SearchBar>
               <PhoneMenuContainer>
                   <MenuSearch/>
                    <Menu/>
               </PhoneMenuContainer>
            </Nav>
    )
}

export default Header
