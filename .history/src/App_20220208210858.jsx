import React, { useEffect, useState } from "react"
//Styles here
import "./sass/index.scss"

//Firestore
import { collection, doc, onSnapshot } from "firebase/firestore"
import store from "./firebase/firebase.config"

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

    //setup state
    const [Tasks,setTasks]= useState([])
    const [TasksAll,setTasksAll]= useState([])
    const [Theme,setTheme]= useState(["dark"])
    const [Id,setId]= useState([null])
    const [CurrentFilter,setCurrentFilter]= useState(["all"])
    const [Reset,setReset]= useState([false])
    const [Loading,setLoading]= useState([true])

    //Changing state
    useEffect(()=>{
        onSnapshot(collection(store,"tasks"),(snapahot)=>{
            let temp = []
            snapahot.docs.forEach((doc)=>{
                temp.push({...doc.data(), id:doc.id})
            })
        setLoading(false)
        setTasks(temp)
        setTasksAll(temp)
        const completed = temp.filter((task)=>task.completed)
        let arrCompleted = []
        completed.forEach((item)=>{
            arrCompleted.push(item)
        })
        setCompleted(arrCompleted)
        console.log(temp)
        })
        
    },
    [])
  //updating the state
    const setCompleted = (newId)=>setId(newId)

    const changeTheme = (newTheme)=>setTheme(newTheme)
    
    const getAllTasks =()=>(setTasks(TasksAll),setCurrentFilter("all"))

    const getActiveTasks = (activeTasks)=>(setTasks(activeTasks,setCurrentFilter("active")))

    const getCompletedTasks = (completedTasks)=>(setTasks(completedTasks), setCurrentFilter("completed"))

    const reset = (isReset)=> setReset(isReset)


    return (
        <>
            <div className={"content" + Theme}>
               <HeaderComponent changeTheme={changeTheme}/>
               <AddComponent countTask={Tasks.length} setReset={reset} reset={Reset}/>
               {
                   Loading?
                   <div className="loading">
                   <h2>Loading...</h2>
                   <BiLoaderAlt className=" icon-loading"/>
                   
                   </div>
                   :null

               }
               <MsgComponent tasks={Tasks} filter={CurrentFilter} loading={Loading}/>
                <ListComponent list={Tasks}/>
                <ConfigComponent
                   numTasks={Tasks.length}
                   completed={Id}
                   staticTasks={TasksAll}
                   getall={getAllTasks}
                   getActive={getActiveTasks}
                   getCompleted={getCompletedTasks}
                   reset={Reset}
                
                />
                <FooterComponent/>
            </div>
        </>
    ) 
}

export default App;
