import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import article1img from "./assets/images/article1.jpg"
import article2img from "./assets/images/article2.png"
import article3img from "./assets/images/article3.jpg"
import article4img from "./assets/images/article4.jpg"

import "./styles/App.css";

 class App extends React.Component {
 
  render () {
    return (
      <>

     <Navbar />
      <section id="articles">

        <Article title="Backup Empresarial: A Base para a Transformação Digital Segura" provider= "Abrace a inovação sem medo, com a segurança dos seus dados sempre garantida." description= "A transformação digital abre um mundo de possibilidades para o seu negócio. Mas para aproveitar todo o potencial dessa jornada, é fundamental garantir a segurança dos seus dados.O backup empresarial é a base para uma transformação digital segura e confiável. Com seus dados protegidos, você pode inovar sem medo, explorar novas tecnologias e impulsionar o crescimento do seu negócio no mundo digital." thumbnail= {article1img}/>


        <Article title= "Seguro contra Desastres: Proteja sua Empresa com Backup Empresarial"provider= "Evite perdas financeiras e garanta a continuidade do seu negócio com soluções de backup confiáveis." description="Imagine um cenário: um ataque cibernético, um desastre natural ou falha humana comprometem seus dados cruciais. Sem um plano de backup eficaz, sua empresa pode sofrer consequências graves, como perda de receita, interrupção de operações e até mesmo danos à reputação." thumbnail= {article2img} />


        <Article title= "Mais do que Segurança, um Investimento Estratégico" provider= "Descubra como o backup empresarial impulsiona a competitividade e o crescimento da sua empresa." description= "Olhe além da segurança de dados e veja o backup empresarial como uma ferramenta estratégica para o sucesso do seu negócio. Com acesso rápido e confiável às suas informações, você pode tomar decisões mais assertivas, otimizar processos, aprimorar a experiência do cliente e impulsionar a inovação.O backup vai além da proteção contra perdas. É um investimento que garante a continuidade das suas operações, a produtividade da equipe e a competitividade no mercado." thumbnail= {article3img} />


        <Article title= "Adeus Preocupações, Olá Tranquilidade: Backup na Nuvem para Empresas" provider= "Inove e simplifique a proteção de dados com soluções de backup em nuvem escaláveis e seguras." description= "Diga adeus às preocupações com infraestrutura local e custos onerosos. O backup em nuvem oferece uma solução moderna, escalável e segura para proteger seus dados valiosos." thumbnail= {article4img} />



      </section>

     

     </>
  );
  
  }
 }

 export default App;
