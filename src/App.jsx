import React from 'react';
import { FaLinkedin, FaGithub, FaNewspaper } from "react-icons/fa";


function App() {
  return (
    <div className=" text-center  flex flex-col items-center">
      <header className=" flex flex-col border-b-2 border-gray-400 p-7 w-full">
        <h1 className="		text-4xl font-bold  text-sky-700 ms-0.5">
          Jonas Levy Pereira Meneses
        </h1>
        <p>85 98630-9152 - 85 99267-2678 | jonaslevy0408@gmail.com </p>
        <p className='flex text-center justify-center items-center gap-3'>
          <a href='https://www.google.com' target='_blank' className='flex items-center gap-1'><FaLinkedin /> Linkedin</a>
          <a href='https://www.google.com' target='_blank' className='flex items-center gap-1'><FaGithub /> Github</a>
          <a href='https://www.google.com' target='_blank' className='flex items-center gap-1'><FaNewspaper /> Lattes</a>
        </p>
      </header>
      <section className='flex p-8 flex-col items-start border-b-2 border-gray-400'>
        <h2 className="text-2xl  font-bold  text-sky-700 ">
          Resumo Profissional
        </h2>
        <p className='text-left'>
          Estudante de Análise e Desenvolvimento de Sistemas, com foco em programação e
          desenvolvimento web. Possuo conhecimentos em HTML, CSS, JavaScript, TypeScript e
          React, além de experiência prática no consumo de APIs e desenvolvimento de
          aplicações web. Tenho noções de backend utilizando Node.js e Express, e
          conhecimentos em SQL para manipulação de bancos de dados relacionais. Busco
          oportunidades para aplicar minhas habilidades em projetos reais e continuar aprendendo
          em um ambiente colaborativo e inovador.

        </p>
      </section>
      <section className='flex p-8 flex-col items-start border-b-2 border-gray-400'>
        <h2 className="text-2xl  font-bold  text-sky-700 ">
          Objetivo
        </h2>
        <p className='text-left'>
          Atuar na área de Desenvolvimento Web, aplicando meus conhecimentos em frontend e
          backend para contribuir com o desenvolvimento de aplicações web, com foco em
          integração de APIs e boas práticas de programação. Busco participar de projetos
          colaborativos e desafiadores que proporcionem aprendizado contínuo e crescimento
          profissional.
        </p>
      </section>
    </div>
  );
}

export default App;
