import React, { Component } from 'react'
import './top.css'
import topData from './topData'

class Top extends Component {
    render(){
        return(
            <div className="PrincipaisNoticias">
                <div className="title">
                    <span>CORONAVÍRUS                         
                        <svg className="arrowRig" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd"></path></svg>
                    </span>
                </div>
                <div className="notices">
                    {topData.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="cardInt">
                                    <div className="image-card">
                                        <img src={item.image}></img>
                                    </div>
                                    <div className="noticeP">
                                        <p>{item.noticiaP}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Top;