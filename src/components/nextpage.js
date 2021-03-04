import { Link } from "gatsby"

import React from "react"
import Arrow from '../images/arrow.svg'
import Arrow2 from '../images/arrow2.svg'

const NextPage = (props) => (
  <div>
    <div className='next-container'>
      <div className='next-center'>

        <div className='header-name'> 
          <Link to={props.link2} >
              <img src={Arrow2} className='arrow'/>
          </Link>
        </div>

        <div className='header-nav'>
          <nav>
          <Link to={props.link}>
              <img src={Arrow} className='arrow'/>
          </Link>
          </nav>
        </div>

      </div>
    </div>
  </div>
)


export default NextPage