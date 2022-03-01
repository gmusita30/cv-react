import React from 'react';
import Pic from '../assets/2018116881p.jpg';
import Phone from '../assets/phone.png';
import Email from '../assets/email.png';
import Linkedin from '../assets/linkedIn.png';
import Facebook from '../assets/facebook.png';
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
                    <span className='contactinfo'><span><img src={Phone} alt='phoneicon' width='20' height='20' /></span> 09491642869 
                    | <span><img src={Email} alt='phoneicon' width='20' height='20' /></span> gabrielusita@gmail.com 
                    | <span><img src={Linkedin} alt='linkedinicon' width='20' height='20' /></span> <a href= "https://www.linkedin.com/in/gabriel-adrian-usita/">https://www.linkedin.com/in/gabriel-adrian-usita/ </a>
                    | <span><img src={Facebook} alt='facebookicon' width='20' height='20' /></span> <a href= "https://www.facebook.com/gabriel.usita">https://www.facebook.com/gabriel.usita </a> </span> <br></br>

                    <span className='objective'><br></br>I am a student who aims to acquire knowledge and skills in the field of Information
                     Technology. I am looking forward in gaining experience in an actual working environment along with peers who will 
                     guide me in becoming a future I.T.professional.</span>
                </div>
            </div>
            
        )
    }
}
export default Header;