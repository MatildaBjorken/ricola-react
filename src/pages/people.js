import React from "react"


import Header from '../components/header'
import PeopleImg from '../images/people.jpg'


import Leaf from '../components/leaf'
import Svg2 from '../components/svg2'
import Svg3 from '../components/svg3'

import ModalOne from '../components/modalnature'
import ModalTwo from '../components/modalTwo'
import ModalThree from '../components/modalThree'

import NextPage from '../components/nextpage'

import Line1 from '../images/line1.svg'
import Line2 from '../images/line2.svg'
import Line3 from '../images/line3.svg'

import DottedLine1 from '../images/dottedLine1.svg'
import DottedLine2 from '../images/dottedLine2.svg'
import DottedLine3 from '../images/dottedLine3.svg'

import Sidebar from '../components/sidebar'

import ModalInfo from '../components/modaInfo'
import Suggestion from '../components/suggestion'

const People = () => {
    function viewMainLine(){
      
        document.querySelector('.modal-main').style.visibility = 'visible';
      
      }
return (

<div>
    <div className='main-bg' style={{ backgroundImage: `url(${PeopleImg})` }}>
          <Header/>
        
          
          <div className='svg-animations'>
                <Leaf/>
                <Svg2/>
                <Svg3/>
            </div>
            
                <div className='circle-subpage'>
                   
                    <div className='yellow-button' id='business' onClick={()=> {viewMainLine()}}>
                        <div className='circle-text'>
                            <span>P</span>
                            <br></br>
                            People
                        </div>
                    </div>

                    <div className='modal-main'>
                    
                    <img src={Line1} className='line' alt='line one' />
                 
                     <ModalOne title='People' cssClass='modal-first' changeAnimation='changeAnimation()'/>
                     <img src={Line2} className='line two'/>
                     <ModalTwo title='ricola' cssClass='modal-second' >
                       <h3>h3</h3>
                     </ModalTwo>
                     <img src={Line3} className='line three'/>
                     <ModalThree title='new' cssClass='modal-third'/>
                     <NextPage link='/people' link2='http://localhost:8000'/>
                    </div>

                    
                </div>
                <img className='dottedLine1' src={DottedLine1}/>
                 
                    <Sidebar sideId='sideOne' 
                    
                    imageOne={require('../images/workerTwo.png')}/>
                    
                <img className='dottedLine2' src={DottedLine2}/>

                    <Sidebar sideId='sideTwo' 
                    
                    imageOne={require('../images/worker.png')}/>
                    
                <img className='dottedLine3' src={DottedLine3}
                
                imageOne={require('../images/workerTwo.png')}/>
                
                    <Sidebar sideId='sideThree'/>

                    <Suggestion/>
                    <ModalInfo/>
    </div>
</div>

)

}
export default People