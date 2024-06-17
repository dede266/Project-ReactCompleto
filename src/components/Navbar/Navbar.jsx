import React from 'react';
import logoimg from "../../assets/images/logo.png";

import "./styles.css";

export class Navbar extends React.Component {
    render () {
        return ( <header>
            <nav id="navbar">
              <div className="nav-brand">
                <img src={logoimg} alt="" />
                <h1>Backup Empresarial</h1>
              </div>
    
              <ul className="nav-list">
              <li>
                <a href="/">Home</a>
                </li>
              <li>
                <a href="/">Trendings</a>
                </li>
              <li>
                <a href="/">Categories</a>
                </li>
              <li>
                <a href="/">About Us</a>
              </li>
              </ul>
            </nav>
          </header>);
        
    }
}



// export tem que ter o mesmo nome da 'class'
// para importar vai em app.jsx abre tag com seu import ex:
// <Navbar></Navbar> o vs code vai sugerir importar automatico porém
// la em cima da pagina app.jsx deverá constar o seguinte import
//import Navbar from "./components/Navbar/Navbar"; (seguindo caminho da sua pasta)