import React from 'react';
import'../body.css';

class Skills extends React.Component {
    render() {
        return(
            <div className='initialDiv'>
                   <br/>

                    <h1 className='titleHeader'>Skills and Abilities</h1>
                    
                    <hr className='hrClassName'></hr>
                    
                    <table>
                        <tr>
                            <td className='titleDescription'>Programming
                            <br />
                                <ul className='bulletedDescription'>
                                    <li>Basic knowledge in Java, Python, PHP, HTML, CSS, JavaScript, Visual Basic .NET</li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td className='titleDescription'>Tools and Technologies 
                            <br />
                                <ul className='bulletedDescription'>
                                    <li>Git, Microsoft Office</li>
                                    <li>Basic Knowledge in MySQL, Firebase, Cloud Firestore</li>
                                    <li>Basic Knowledge in Windows Server 2012 and Ubuntu</li>
                                    <li>Basic Knowledge in Cisco Packet Tracer</li>
                                </ul>
                            </td>     
                        </tr>

                        <tr>
                            <td className='titleDescription'>Communication
                            <br />
                                <ul className='bulletedDescription'>
                                    <li>Good in verbal and written communication skills in both English and Filipino</li>
                                </ul>    
                            </td>            
                        </tr>    
                    </table>         
            </div>
            
        )
    }
}
export default Skills;