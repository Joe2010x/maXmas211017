import React, {useState} from "react"
import LoginPage from "./components/LoginPage.js"
import Selection from "./components/Selection.js"
import Head from "./components/Head.js"
//import Head from "./components/Header.js"

function App() {
const [logedIn, setLogedIn] = useState(false)
//setLogedIn (false)
const [user,setUser] = useState()

const handleLoginSub = () => {

}




//{(!logedIn)? < LoginPage   /> :  < Selection />   }


  return (
    <div className="App">
            
      <Head className="Logo"/>
      {(!logedIn)
        ? < LoginPage 
              isLogedIn ={(e)=>{setLogedIn(e)}} 
              getUserInfo={(user)=>{setUser(user)}}/> 

        :  < Selection  user={user} />   }
    </div>
  );
}

export default App;
