import React from 'react';
import Telus from '../assets/telus.jpg';
import Acn from '../assets/acn.png';

import'../body.css';

class CharacterReferences extends React.Component {
    render() {
        return(
            <div className='initialDiv'>
                <br/>

                    <h1 className='titleHeader'>Character References</h1>
                    
                    <hr className='hrClassName'></hr>
                    
                    <table>

                        <tr>
                            <td><img src={Telus} alt='telus' width='45' height='62' /></td>  &nbsp;
                            <td className='titleDescription'>Mr. Dickenson Culala
                            <br />
                            <span className='subtitleDescription'>TELUS International Philippines, Operations Senior Team Leader</span>
                            </td>           
                        </tr>
                        <br />
                        <tr>
                            <td><img src={Acn} alt='telus' width='45' height='62' /></td>  &nbsp;
                            <td className='titleDescription'>Mr. Anjo Gloriane
                            <br />
                            <span className='subtitleDescription'>Accenture Inc., Tech Solution Planning Manager/Solution Architect</span>
                            </td>               
                        </tr>
                        <br />
   
                        <br></br><br></br>

                       
                    </table>         
            </div>
            
        )
    }
}
export default CharacterReferences;