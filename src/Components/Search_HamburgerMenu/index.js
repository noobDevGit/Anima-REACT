

import { BigMenu,
        Close,
        SubMenu,
        NewLi,
        MobileSearch,
        CustomInput
        } from "./Searc_hamburgerMenuElements"


        

const SearchMenu = ({ISOPEN,ToggleFunc,OpenSearch,MobileQuery}) => {


 


    const go = () =>{

        ToggleFunc(false)

    }

    const ProccessInput = (value) =>{

        MobileQuery(value)

    }


    return (
        <>
        <MobileSearch Open = {OpenSearch} >
        <CustomInput type='text' placeholder='Search'  onChange = {(e)=>ProccessInput(e.target.value)}/>
        </MobileSearch>
        
        <BigMenu Open = {ISOPEN}>
            <Close onClick={go}/>
                <SubMenu top={true}>
                    <NewLi to={'Genre/Anime'} onClick={go}>
                        Anime
                    </NewLi>
                </SubMenu>
                <SubMenu>
                <NewLi to={'Genre/Manga'} onClick={go}>
                        Manga
                    </NewLi>
                </SubMenu>

        </BigMenu>
        </>
    )
}

export default SearchMenu
