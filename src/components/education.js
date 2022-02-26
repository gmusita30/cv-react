import React from 'react';
import UST from '../assets/ustlogo.jpg';
import SHS from '../assets/pcc.png';

import'../body.css';

class Education extends React.Component {
    render() {
        return(
            
            <div className='initialDiv'>
                    <br/>
                    <h1 className='titleHeader'>Education</h1>
                    
                    <hr className='hrClassName'></hr>
                    
                    <table>
                        <tr>
                            <td><img src={UST} alt='ust' width='65' height='70' /></td>  &nbsp;
                            <td className='titleDescription'>University of Santo Tomas
                                <br/>
                                <span className='subtitleDescription'>Bachelor of Science in Information Technology (Web and Mobile App Development)</span>
                                <br/>
                                <span className='dateDescription'>2018-2022</span>
                            </td>
                            
                        </tr>

                        <br></br>

                        <tr>
                            <td><img src={SHS} alt='shs' width='60' height='65' /></td>  &nbsp;
                            <td className='titleDescription'>Pasig Catholic College  
                                <br/>
                                <span className='subtitleDescription'>Science, Technology, Engineering and Mathematics Strand (STEM)</span>
                                <br/>
                                <span className='dateDescription'>2016-2018</span>
                            </td>
                            
                        </tr>

                    </table>         
            </div>
            
        )
    }
}
export default Education;