 'use client'
 import signout from '../confiq/signout'
import { AuthContext } from '../context/AuthProvider/index'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {

    const { user } = useContext(AuthContext)
    const router = useRouter()

    const handleOnClickLoginBtn = () => {
        if (!user) {
            router.push('/Login')
        } else {
            signout()
        }
    }
    // console.log(user.email);

    return(
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  
  
      <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleOnClickLoginBtn} type="submit">{user ? user.email : "Login"}</button>
  </div>
</nav>
<div>
  <h1 align ="center"> {user? "Hello :--" + user.email : "User empty"}</h1>
</div>
</>
    )
}
export default Navbar