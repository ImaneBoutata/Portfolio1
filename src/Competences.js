import React from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import Footer from './Footer';

function Competences() {
    return (
        <div className='container-fluid'>
            <div className='row'>
            <Splitter style={{ height: '300px', marginTop: '40px' }}>
                <SplitterPanel className=" align-items-center justify-content-center container-fluid">
                    <div  style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: '20px' }}>

                        <div className='row justify-content-center ' style={{  flexDirection: 'row', alignItems: 'center' }}>
                            <div className='col-md-6'>
                            <h4 >HTML/CSS</h4>

                            </div>
                            <div className="card col-md-6" >
                                <ProgressBar value={50} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }}></ProgressBar>
                            </div>
                        </div>

                        <div  className='row justify-content-center ' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div className='col-md-6'>
                            <h4>REACT</h4>

                            </div>
                            <div className="card col-md-6" >
                                <ProgressBar value={80} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }} ></ProgressBar>
                            </div>
                        </div>

                        <div className='row justify-content-center' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div className='col-md-6'>
                            <h4 >ANGULAR</h4>
                            </div>
                            <div className="card col-md-6" >
                                <ProgressBar value={70} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }}></ProgressBar>
                            </div>
                        </div>

                        <div className='row justify-content-center'  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div className='col-md-6'>
                            <h4 >JAVASRIPT</h4>

                            </div>
                            <div className="card col-md-6">
                                <ProgressBar value={70} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }}></ProgressBar>
                            </div>
                        </div>
                    </div>


                </SplitterPanel>
                

                <SplitterPanel className="flex align-items-center justify-content-center container-fluid">
                    <div className='row justify-content-center ' style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: '20px' }}>

                        <div className='row justify-content-center'  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div className='col-md-6'>
                            <h4  >PYTHON</h4>
                            </div>
                            
                            <div className="card col-md-6" >
                                <ProgressBar value={50} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }}></ProgressBar>
                            </div>
                        </div>

                        <div className='row justify-content-center'  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div className='col-md-6'>
                            <h4 >JEE</h4>

                            </div>
                            <div className="card col-md-6"  >
                                <ProgressBar value={80} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }} ></ProgressBar>
                            </div>
                        </div>

                        <div className='row justify-content-center'  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div  className='col-md-6'>
                            <h4 >JAVA</h4>

                            </div>
                            <div className="card col-md-6" >
                                <ProgressBar value={70} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }}></ProgressBar>
                            </div>
                        </div>

                        <div className='row justify-content-center'  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div className='col-md-6'>
                            <h4>C#</h4>

                            </div>
                            <div className="card col-md-6" >
                                <ProgressBar value={70} style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.3)', margin: '10px' }}></ProgressBar>
                            </div>
                        </div>
                    </div>

                </SplitterPanel>
            </Splitter>
            </div>
            <div className='row mt-5'>

            </div>

            <Footer />

        </div>
    )
}
export default Competences;