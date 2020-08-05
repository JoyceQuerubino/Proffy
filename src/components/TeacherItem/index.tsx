import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'; 

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/66806696?s=460&u=8d322799564bf4b0e72262ca04d5f01fca74bb16&v=4" alt="Joyce Querubino"/>
            <div>
                <strong>Joyce Querubino</strong>
                <span>Educação Física</span>
            </div>
        </header>

        <p>
        Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.
        <br/> <br/>
        Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"
        </p>

        <footer>
          <p>
              Preço/hora
              <strong>R$50,00</strong>
          </p>
          <button type="button">
              <img src={whatsappIcon} alt="Icone Whatsapp"/>
              Entrar em contato
          </button>
        </footer>
    </article>
    )
}

export default TeacherItem; 