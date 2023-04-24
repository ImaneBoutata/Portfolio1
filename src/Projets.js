import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Footer from './Footer';

function Projets(){

    return (
        <div className='container-fluid'>

        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab header="Application de gestion des plans d'actions QSE">
                    <p className="m-0">
                        <h4>Technologies Utilisées : </h4>
                        Spring Boot pour le Backend et Angular pour le Frontend.
                        L'application suit le modèle MVC(Model-View-Controller). Concernant le coté securité, elle utilise Spring Security pour 
                        garantir l'indification, l'authentification et l'autorisation.
                        <h4>Description : </h4>
                        L'application permet de gérer les processus QSE, elle est considerée comme un outil applicatif qui permet le suivi et le 
                        traitement en temps réel du plan d'actions QSE tout en garantissant l'organisation et la sécurité des données métiers
                        
                    </p>
                </AccordionTab>
                <AccordionTab header="Application : Smart Home">
                    <p className="m-0">
                    <h4>Technologies Utilisées : </h4>
                        Le language : C sharp pour l'implementation de Backend et Frontend aussi 
                        
                        <h4>Description : </h4>
                        L'application permet de contôller tous les appareils electroniques et electromenager d'une maison, pour assurer sa sécurité ainsi 
                        que celle des habitants en cas d'incendies ou de problèmes électriques qui peuvent arriver. Elle permet le contrôle à distance 
                        et l'avertissement via des emails de tous les utilisateurs autorisés. 
                    </p>
                </AccordionTab>
                <AccordionTab header="Application de gestion des Appels d'Offres ">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
                <AccordionTab header="Application de gestion des reservations hôtelieres ">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
 
        <Footer />
        </div>
    )
}
export default Projets;