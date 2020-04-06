import React from 'react';
import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroImg from '../../assets/heroes.png'

export default function Logon(){
    return(
        <div className= "logo-container">
            <img src = {logoImg} alt= "Be The Hero"/>
            <section className = "form"> 
                <h1>
                    Faça sua logon
                </h1>
                <input placeholder = "seu ID"/>
                <button type = "submit"> Entrar </button>
                <a href = "/register">Não tenho cadastro</a>
            </section>
            <img src={heroImg}/>
        </div>
    )
}