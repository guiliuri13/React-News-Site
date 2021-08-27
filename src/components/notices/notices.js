import React, { Component } from 'react'
import './notices.css'
import {noticesData} from './noticesData'

function Notices() {
    return(
        <div>
            {noticesData.map((item, index) => {
                return (
                    <div key={index}>
                        <div className='containerNoticia'>
                        <img src={item.imagem}/>
                            <div className="texts">
                            <h3>{item.title}</h3>
                                <div className="noticia">
                                    <p className="pNoticia">{item.conteudo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Notices