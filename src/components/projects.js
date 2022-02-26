import React from 'react';
import'../body.css';

class Projects extends React.Component {
    render() {
        return(
            
            <div className='initialDiv'>
                    <br/>
                    <h1 className='titleHeader'>Projects Handled</h1>
                    
                    <hr className='hrClassName'></hr>
                    
                    <table>
                        <tr>
                            <td className='titleDescription'>RemindMed: Medication Reminder and Tracker using Optical Character Recognition and Text-to-Speech
                                <br/>
                                <span className='subtitleDescription'>System Developer</span>
                                <br/>
                                <span className='dateDescription'>June 2021- Dec 2021</span>
                            </td>
                            
                        </tr>

                        <br></br>

                        <tr>
                            <td className='titleDescription'>Rootmates Clothing: An Online Ordering System
                                <br/>
                                <span className='subtitleDescription'>System Developer</span>
                                <br/>
                                <span className='dateDescription'>Aug 2020 - May 2021</span>
                            </td>
                            
                        </tr>
                        <br></br>

                        <tr>
                            <td className='titleDescription'>Cookbites: A food ordering application for different fast foods and small businesses 
                                <br/>
                                <span className='subtitleDescription'>Quality Assurance</span>
                                <br/>
                                <span className='dateDescription'>Aug 2020 - Dec 2020</span>
                            </td>
                            
                        </tr>

                    </table>         
            </div>
            
        )
    }
}
export default Projects;