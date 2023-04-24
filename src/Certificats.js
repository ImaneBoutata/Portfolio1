import React from 'react';
import { Card } from 'primereact/card';
import logo from './images/Cap1.PNG';
import p2 from './images/cap2.PNG';
import p3 from './images/cap3.PNG';
import p4 from './images/cap4.PNG';
import p5 from './images/cap5.PNG';
import p6 from './images/cap6.PNG';

import { Image } from 'primereact/image';
import Footer from './Footer';


function Certificats() {

    return (
        <div>
        <div style={{ margin:'20px', marginLeft:'10px',  marginRight:'10px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' , justifyContent: 'center', alignItems: 'center'}}>
        <div className="card" style={{ margin:'20px' , justifyContent:'center'}}>
            <Card title="DevOps,Cloud, and Agile Foundations">
                <p className="m-0">
                <Image src={logo} alt="profile" height='350px' width='450px' style={{ margin:'20px' , justifyContent:'center'}} preview/>

                </p>
            </Card>
        </div>
        <div className="card" style={{ margin:'20px' , justifyContent:'center'}}>
            <Card title="DevOps">
                <p className="m-0">
                <Image src={p2} alt="profile" height='350px' width='450px' style={{ margin:'20px' , justifyContent:'center'}} preview/>

                </p>
            </Card>
        </div>
        <div className="card" style={{ margin:'20px' , justifyContent:'center'}}>
            <Card title="Cloud Computing">
                <p className="m-0">
                <Image src={p3} alt="profile" height='350px' width='450px' style={{ margin:'20px' , justifyContent:'center'}} preview/>

                </p>
            </Card>
        </div>
        <div className="card" style={{ margin:'20px' , justifyContent:'center'}}>
            <Card title="Agile Developement and Scrum">
                <p className="m-0">
                <Image src={p4} alt="profile" height='350px' width='450px' style={{ margin:'20px' , justifyContent:'center'}} preview/>

                </p>
            </Card>
        </div>
        <div className="card" style={{ margin:'20px' , justifyContent:'center'}}>
            <Card title="Advanced React">
                <p className="m-0">
                <Image src={p5} alt="profile" height='350px' width='450px' style={{ margin:'20px' , justifyContent:'center'}} preview/>

                </p>
            </Card>
        </div>
        <div className="card" style={{ margin:'20px' , justifyContent:'center'}}>
            <Card title="Bootstrap 4">
                <p className="m-0">
                <Image src={p6} alt="profile" height='350px' width='450px' style={{ margin:'20px' , justifyContent:'center'}} preview/>

                </p>
            </Card>
        </div>

        </div>
        <Footer />

        </div>
    )
}
export default Certificats;