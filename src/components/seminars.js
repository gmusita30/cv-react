import React from 'react';
import'../body.css';

class Seminars extends React.Component {
    render() {
        return(
            <div className='initialDiv'>

                <br />
                
                    <h1 className='titleHeader'>Seminars and Trainings Attended</h1>

                    <hr className='hrClassName'></hr>

                    <table>
                        <tr>
                            <td  className='titleDescription'>Tech-Knowledge-G: Let's Git Together 
                            <br />
                            <span className='dateDescription'>January 2022</span>
                            </td>                           
                        </tr>
                        <br />

                        <tr>
                            <td  className='titleDescription'>Tech-Knowledge-G: Let’s Git Together 
                            <br />
                            <span className='dateDescription'>January 2022</span>
                            </td>                          
                        </tr>
                        <br />

                        <tr>
                            <td  className='titleDescription'>2022 Solution Challenge: Info Session by Google Developer Student Clubs
                            <br />
                            <span className='dateDescription'>Febuary 2022</span>
                            </td>                
                        </tr>
                        <br />

                        <tr>
                            <td  className='titleDescription'>College of Information and Communication Technology Webinar Lecture Series
                            <br />
                            <span className='dateDescription'>Febuary 2022</span>
                            </td>                      
                        </tr>
                        <br />

                        <tr>
                            <td  className='titleDescription'>GDSC: Solution Challenge Day 2: Design Day
                            <br />
                            <span className='dateDescription'>Febuary 2022</span>
                            </td>            
                        </tr>
                        <br />

                        <tr>
                            <td  className='titleDescription'>How To Ace your Web Developer interview - strategies for success
                            <br />
                            <span className='dateDescription'>Febuary 2022 </span>                            
                            </td>                          
                        </tr>
                        <br />

                        <tr>
                            <td  className='titleDescription'>StackLeague x AWS Tech Session App Development Trends Today
                            <br />
                            <span className='dateDescription'>Febuary 2022 </span>                  
                            </td>                    
                        </tr>
                        <br></br>                    
                    </table>         
            </div>
            
        )
    }
}
export default Seminars;