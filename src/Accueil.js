import React from 'react';
import { Card } from 'primereact/card';
import logo from './images/women.png';
import logo1 from './images/isjpg.jpg';
import { Image } from 'primereact/image';
import Footer from './Footer';




function Accueil() {

    const header = (
        <img alt="Card" src={logo} />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
        </div>
    );

    return (


        <div columns={{ xs: 1, sm: 2, md: 3 }} className="container-fluid"        >
            <div className='row justify-content-center' style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='col-md-6'>
                <Image src={logo} className="rounded" alt="profile" height='350px' width='450px' style={{ marginLeft: '20px' }} preview />
                </div>
                <div className="card col-md-6 text-left p-shadow-3" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.3)', textAlign: 'left', marginTop: '20px' }}>


                    <Card >
                        <h3>IMANE BOUTATA</h3>
                        <p className="m-0">
                            Je suis Imane BOUTATA et j'ai 23 ans. Je suis actuellement étudiante en 4ème année de génie informatique et réseaux à l'EMSI. J'ai obtenu mon baccalauréat à l'école Al Manar,
                            puis j'ai obtenu ma licence en systèmes informatiques répartis à la FST. Je maîtrise plusieurs langages de programmation tels que JAVA, JEE, C, Python, React, Angular, C#...
                            Je suis une fille très ambitieuse et sérieuse.
                            De plus, j'ai développé de bonnes compétences en communication et en travail d'équipe grâce à ma participation à divers projets et activités extracurriculaires. J'aime travailler
                            en collaboration avec les autres pour atteindre des objectifs communs et j'apprécie les opportunités de travailler avec des personnes ayant des antécédents et des compétences différentes.
                            Je suis convaincue que la diversité des perspectives et des expériences est une force qui peut conduire à des solutions innovantes et créatives.
                        </p>
                    </Card>
                </div>

            </div>
            <Footer />

        </div>
    )
}
export default Accueil;