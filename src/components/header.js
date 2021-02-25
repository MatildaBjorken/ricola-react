import { Link } from "gatsby"
import Logo from "../images/greenLogo.svg"
import React from "react"
import Menu from "../images/burger.svg"

const Header = () => (

  <header>

    <div className='header'>
      <Link className='header-logo'>
        <img className='ricola-logo' src={Logo}/>
      </Link>

      <div className='header-menu'>
        <img src={Menu}/>
      </div>

    </div>
  </header>

)

export default Header