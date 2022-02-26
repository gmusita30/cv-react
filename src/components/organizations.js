import React from 'react';
import CNAG from '../assets/cnag.png';
import SITE from '../assets/site.jpg';
import'../body.css';

class Organizations extends React.Component {
    render() {
        return(
            <div className='initialDiv'>
                    <br/><br/>
                    <h1 className='titleHeader'>Organizations</h1>
                    
                    <hr className='hrClassName'></hr>
                    
                    <table>
                        <tr>
                            <td><img src={CNAG} alt='ust' width='65' height='70' /></td>  &nbsp;
                            <td className='titleDescription'>UST - CNAG ICS
                                <br/>
                                <span className='subtitleDescription'>Executive Assosiate</span>
                                <br/>
                                <span className='dateDescription'>2018-2029</span>
                            </td>
                            
                        </tr>

                        <br></br>

                        <tr>
                            <td><img src={SITE} alt='shs' width='60' height='65' /></td>  &nbsp;
                            <td className='titleDescription'>UST- SITE (Society of Information Technology Enthusiasts) 
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
export default Organizations;