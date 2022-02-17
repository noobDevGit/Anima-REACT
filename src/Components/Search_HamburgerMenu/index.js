

import { BigMenu,
        Close,
        SubMenu,
        NewLi } from "./Searc_hamburgerMenuElements"




const SearchMenu = ({ISOPEN,ToggleFunc}) => {


    const go = () =>{

        ToggleFunc(false)

    }


    return (
        <>
        
        
        <BigMenu Open = {ISOPEN}>
            <Close onClick={go}/>
                <SubMenu top={true}>
                    <NewLi to={'Genre/'} onClick={go}>
                        Anime
                    </NewLi>
                </SubMenu>
                <SubMenu>
                    Manga
                </SubMenu>

        </BigMenu>
        </>
    )
}

export default SearchMenu
