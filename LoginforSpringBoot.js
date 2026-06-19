import React,{useState} from 'react'

export const LoginforSpringBoot = () => {
    const [user, setUser] = useState("");
    const [pswd, setPswd] = useState("");
    const handleclick=()=> {
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({name:user, pswd:pswd}),
        })
        .then((res) => res.text())
        .then((data) => alert(data))
        .catch(() => alert("Backend not reachable"));
    }
  return (
    <div>
        <h2>Login Page</h2>
        <input
            type = "text"
            placeholder = "Username"
            value = {user}
            onChange = {(e) => setUser(e.target.value)}/>
        <br/><br/>

        <input
            type = "password"
            placeholder = "Password"
            value = {pswd}
            onChange = {(e) => setPswd(e.target.value)}/>
        <br/><br/>

        <button onClick={handleclick}>Login</button>
    </div>
  )
}
