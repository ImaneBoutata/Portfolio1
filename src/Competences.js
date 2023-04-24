import React from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import Footer from './Footer';

function Competences() {
    return (
        <div>
             <Splitter style={{ height: '300px', marginTop:'40px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center">
        
        <div style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop:'20px' }}>








            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <h4 style={{ marginLeft:'80px'}} >HTML/CSS</h4>
                <div className="card" style={{ width: '55%', marginLeft:'30px'}}>
                    <ProgressBar value={50} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }}></ProgressBar>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <h4 style={{ marginLeft:'80px'}}>REACT</h4>
                <div className="card" style={{ width: '55%', marginLeft:'30px'}} >
                    <ProgressBar value={80} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)' , margin: '10px'}} ></ProgressBar>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <h4 style={{ marginLeft:'80px'}}>ANGULAR</h4>
                <div className="card" style={{ width: '55%' , marginLeft:'30px'}}>
                    <ProgressBar value={70} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }}></ProgressBar>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <h4 style={{ marginLeft:'80px'}}>JAVASRIPT</h4>
                <div className="card" style={{ width: '55%' , marginLeft:'30px'}}>
                    <ProgressBar value={70} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }}></ProgressBar>
                </div>
            </div>
            </div>

            
            </SplitterPanel>

            <SplitterPanel className="flex align-items-center justify-content-center">
            <div style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop:'20px' }}>

<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <h4 style={{ marginLeft:'80px'}} >PYTHON</h4>
    <div className="card" style={{ width: '55%', marginLeft:'30px'}}>
        <ProgressBar value={50} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }}></ProgressBar>
    </div>
</div>

<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <h4 style={{ marginLeft:'80px'}}>JEE</h4>
    <div className="card" style={{ width: '55%', marginLeft:'30px'}} >
        <ProgressBar value={80} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)' , margin: '10px'}} ></ProgressBar>
    </div>
</div>

<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <h4 style={{ marginLeft:'80px'}}>JAVA</h4>
    <div className="card" style={{ width: '55%' , marginLeft:'30px'}}>
        <ProgressBar value={70} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }}></ProgressBar>
    </div>
</div>

<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <h4 style={{ marginLeft:'80px'}}>C#</h4>
    <div className="card" style={{ width: '55%' , marginLeft:'30px'}}>
        <ProgressBar value={70} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }}></ProgressBar>
    </div>
</div>
</div>
            
            </SplitterPanel>
        </Splitter>
  

        <Footer />
        
        </div>
    )
}
export default Competences;