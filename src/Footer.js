import React from 'react';
import { Card } from 'primereact/card';
import { Menubar } from 'primereact/menubar';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {

  const items = [
    {
      label: <FaFacebook />,
      url: 'https://www.facebook.com/yourfacebookpage',
      target: '_blank'
    },
    {
      label: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/yourlinkedinprofile',
      target: '_blank'
    },
    {
      label: <FaInstagram />,
      url: 'https://www.instagram.com/yourinstagramprofile',
      target: '_blank'
    }
  ];
  return (
    <div>

      <Menubar model={items} style={{ background: '#6495ED', justifyContent: 'center' }} >


      </Menubar>



    </div>
  )
}
export default Footer;