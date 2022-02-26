import React from 'react';
import Telus from '../assets/telus.jpg';
import Rex from '../assets/rex.png';

import'../body.css';

class WorkExperience extends React.Component {
    render() {
        return(
            
            <div className='initialDiv'>
                    <br/>
                    <h1 className='titleHeader'>Work Experience</h1>
                    
                    <hr className='hrClassName'></hr>
                    
                    <table>
                        <tr>
                            <td><img src={Telus} alt='ust' width='65' height='70' /></td>  &nbsp;
                            <td className='titleDescription'>Applications Developer and Support Intern 
                                <br/>
                                <span className='subtitleDescription'>TELUS International, Philippines Inc. | Feb 2022 - May 2022</span>
                                <br/>
                                <span className='subtitleDescription'>Works at TELUS International Digital Solution – Developer Team as a Full Stack Developer</span>
                                
                            </td>
                            
                        </tr>

                        <br></br>

                        <tr>
                            <td><img src={Rex} alt='shs' width='60' height='65' /></td>  &nbsp;
                            <td className='titleDescription'>Quality Assurance Intern
                                <br/>
                                <span className='subtitleDescription'>Rex Printing Company, Inc., Quezon City | Jan 2018 - Jan 2018</span>
                                <br/>
                                <span className='subtitleDescription'>Worked with employees in the Quality Assurance Department with responsibilities of Quality checking and assessment of papers to be used for printing, and updating monitoring sheets from the assessments we have completed</span>
                                
                            </td>
                            
                        </tr>

                    </table>         
            </div>
            
        )
    }
}
export default WorkExperience;