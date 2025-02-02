import React, { Component } from "react";

import styles from '../styles/Teams.module.css';
//import Scroll from '../components/Body/Scroll'
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/footer/Footer";

class TeamsPage extends Component {
    render() { 
        return( 
        <div className={styles.bg}> 
            
            <Navbar page_no = {4}/>

            <div className={`container ${styles.commitee}`}>

                <hr className="bg-primary"></hr>
                <h3 className="text-primary text-center">EXECUTIVE COMMITTE 2021/2022</h3>
                <hr className="bg-primary"></hr>

                <div className="row" style={{marginLeft:'1%'}}>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Randika.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>President<br/>
                                <b>Randika Viraj</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Isuru.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Advisor/Senior Treasurer<br/>
                                <b>Dr. Isuru Nawinne</b></small>
                                </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Thushara.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Vice President<br/>
                                <b>Thushara Weerasundara</b></small>
                            </div>
                        </div>

                        
                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Imesh.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Secretary<br/>
                                <b>Imesh Balasooriya</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Ridma.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Assistant Secretary<br/>
                                <b>Ridma jayasundara</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Nanduni.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Editor<br/>
                                <b>Nanduni Gamage</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Isara.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Junior Editor<br/>
                                <b>Isara Thilakaratne</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Nadeesha.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Junior Treasurer<br/>
                                <b>Nadeesha Diwakara</b></small>
                            </div>
                        </div>              




                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Heshan.jpeg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Heshan Dissanayake</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/comittee/Kavindu.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Kavindu Hewamanage</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Deshan.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Deshan Liyanaarachchi</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/comittee/Pubudu.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Pubudu Bandara</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/comittee/Adithya.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Adithya Gallage</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/comittee/Ishta.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Ishta Jayakody</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Roshila.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Roshila Sewwandi</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Ruchira.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Ruchira Tharaka</b></small>
                            </div>
                        </div>

                </div>

            </div>

            <div className={`container ${styles.web}`}>

                <hr className="bg-primary"></hr>
                <h3 className="text-primary text-center">WEB TEAM</h3>
                <hr className="bg-primary"></hr>

                <div className="row" style={{marginLeft:'1%'}}>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/web/Aminda_Amarasinghe.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Aminda Amarasinghe</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/web/Anuruddha_chandrasekara.PNG"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Anuruddha Chandrasekara</b></small>
                                </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/web/Chiran_Devinda.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Chiran Devinda</b></small>
                            </div>
                        </div>

                        
                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/web/Denuwan_Weerarathne.jpeg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Denuwan Weerarathne</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/web/Jeewantha_Udeshika.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Jeewantha Udeshika</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/web/Kavinda_Karunarathna.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Kavinda Karunarathna</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/web/Lahiru_Pathum.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Lahiru Pathum</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/web/Lakshitha_srimal.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Lakshitha Srimal</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/web/Tharindu_Dhananjaya.JPG"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Tharindu Dhananjaya</b></small>
                            </div>
                        </div>              


                </div>

            </div>

            <div className={`container ${styles.design}`}>

                <hr className="bg-primary"></hr>
                <h3 className="text-primary text-center">DESIGN TEAM</h3>
                <hr className="bg-primary"></hr>

                <div className="row" style={{marginLeft:'1%'}}>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/design/Achintha_Sandakalum.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Achintha Sandakalum</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/design/Chamudi_Jayasumana .JPG"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Chamudi Jayasumana</b></small>
                                </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/design/Kushan_Manahara.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Kushan Manahara</b></small>
                            </div>
                        </div>

                        
                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/design/Mahela_Ekanayake.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Mahela Ekanayake</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/design/Nethmi_Ranasinghe.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Nethmi Ranasinghe</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/design/Nipun_Dharmarathne.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Nipun Dharmarathne</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/design/Nirasha_Sewwandi.jpeg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Nirasha Sewwandi</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/design/Nishankar_Sathiyamohan.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Nishankar Sathiyamohan</b></small>
                            </div>
                        </div>              




                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/design/Sashini_Liyanage.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Sashini Liyanage</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/design/Sathsarani_Aththanayaka.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Sathsarani Aththanayaka</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/design/Thakshila_Jayathilake.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Thakshila Jayathilake</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/design/Vithurshini_Subramanieam.jpeg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Vithurshini Subramanieam</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/design/Ishara_Nawarathna.png"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Ishara Nawarathna</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/design/Sandun_Kodagoda.jpeg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>
                                <b>Sandun Kodagoda</b></small>
                            </div>
                        </div>
                </div>

            </div>

	    {/*<Scroll />*/}
            <Footer />
        </div>);
    }
}
 
export default TeamsPage;