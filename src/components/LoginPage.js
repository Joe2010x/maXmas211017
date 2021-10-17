import React, { useState } from "react"
import axios from "axios"
import Notification from "./Notification.js"

const LoginPage =(props) => {
    const [userName, setUserName] = useState("kevinryan");
    const [password, setPassword] = useState("kev02937@");
    const [errorMessage, setErrorMessage] = useState([null,{color:"red"}])

    const handleClickLogin = (e) => {
        e.preventDefault();
        console.log("form submited!")

        axios.post ('https://fakestoreapi.com/auth/login', {
            username: userName,
            password: password
        })
        .then (res => res.data )
        .then (data=>
            {
                if (data.token) {
                    console.log("returned a token")
                    //display selection page and get UserID
                    axios.get('https://fakestoreapi.com/users')
                        //.then(res=>console.log(res.data))
                        .then (json => {
                            const allUsers = json.data;
                            //console.log("all user is: ",allUsers.map(user=> user.username))
                            const logedUser = allUsers.filter(user => user.username === userName)
                            //console.log(logedUser)
                            props.getUserInfo(logedUser)
                            //console.log(logedUser)
                            props.isLogedIn(true)
                        })


                } 
                if (data.status){
                    console.log(data.status)
                    //display a notification reset username & Password
                    setUserName("")
                    setPassword("")
                    setErrorMessage(["Wrong Username or Password, Please check!", {color:"red"}])
                    setTimeout(()=>{
                        setErrorMessage([null, {color:"green"}])
                    },5000)

                }
            })

    }

    return (
    <div className="login">
        <h2>
            This is login Page
        </h2>
        <Notification message={errorMessage} />
        <form onSubmit={handleClickLogin} >
            <label>User Name: </label>
            <input  
                type="text"
                required
                value ={userName}
                onChange  = {(e)=>{setUserName(e.target.value)}}
                ></input>
            <br/>
            <label>Password:   </label>
            <input 
                type="text"
                required
                value ={password}
                onChange = {(e)=>{setPassword(e.target.value)}}
            ></input>
            <br />
            <button type="submit" >Submit</button>
        </form>
    </div>)
}



export default LoginPage 