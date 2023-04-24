import React from 'react'; 
import { Card } from 'primereact/card';
import Footer from './Footer';

function Formation(){

    return(
        <div className='container-fluid'>

<div>

<div className="card" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.3)', textAlign:'left', margin:'10px' ,backgroundColor: '#f7f7f7'}}>
    <Card>
        <h1>4ème année en Génie Informatique et Réseaux</h1>
        <p style={{  color: 'darkgray' }}>EMSI (Ecole Marocaine des Sciences de l'Ingénieur)</p>
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
    </Card>
</div>
</div>



            <div>

        <div className="card" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.3)', textAlign:'left', margin:'10px' }}>
            <Card>
                <h1>Licence en Systèmes Informatiques Répartis</h1>
                <p style={{  color: 'darkgray' }}>Université Cadi Ayyad</p>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
        </div>

        <div>
                
        <div className="card" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.3)', textAlign:'left', margin:'10px' }}>
            <Card>
                <h1>Bacalaureat filière Science Physique</h1>
                <p style={{  color: 'darkgray' }}>Ecole AL MANAR</p>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
        </div>
        <Footer />
        </div>
    )
}
export default Formation;