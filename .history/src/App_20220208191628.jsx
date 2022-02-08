import React from "react"
//Styles here
import "./sass/index.scss"

//Firestore

//Components

import AddComponent from "./components/add.component"
import ListComponent from "./components/list.component"
import ConfigComponent from "./components/config.component"
import HeaderComponent from "./components/header.component"
import FooterComponent from "./components/footer.component"
import MsgComponent from "./components/msg.component"

//images
import HeaderDarkMobile from "./assets/img/bg-mobile-dark.jpg"
import HeaderDarkDesktop from "./assets/img/bg-desktop-dark.jpg"
import HeaderLightMobile from "./assets/img/bg-mobile-light.jpg"
import HeaderLightDesktop from "./assets/img/bg-desktop-light.jpg"

// Icons
import { BiLoaderAlt } from "react-icons/bi";


const App = () => {

    return (
        <>
            <div className="content">
               <HeaderComponent/>
               <AddComponent/>
               <MsgComponent/>
                <ListComponent/>
                <ConfigComponent/>
                <FooterComponent/>
            </div>
        </>
    )
}

export default App;
