import React from 'react';
import Pic from '../assets/2018116881p.jpg';
import'../body.css';

class Header extends React.Component {
    render() {
        return(
            <div className='mainHeader'>
                 <div className='avatar'>
                    <img src={Pic} alt='1x1pic' width='163' height='160' />
                </div>
                
                <div id='personalInformation'>
                    <span className='name'>Gabriel Adrian M. Usita</span> <br />
                    <span className='occupation'>4th Year Bachelor of Science in Information Technology Student</span> <br/>
                    <span className='contactinfo'>09491642869 | gabrielusita@gmail.com | https://www.linkedin.com/in/gabriel-adrian-usita/</span> <br/>

                    <span className='objective'><br></br>I am a student who aims to acquire knowledge and skills in the field of Information
                     Technology. I am looking forward in gaining experience in an actual working environment along with peers who will 
                     guide me in becoming a future I.T.professional.</span>
                </div>
            </div>
            
        )
    }
}
export default Header;