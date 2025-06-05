import React from 'react';
import Cabecalho from './components/Cabecalho';


function App() {
  return (
    <div className=" text-center  flex flex-col items-center">
      <Cabecalho/>
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
      <section className='flex p-8 flex-col items-start border-b-2 border-gray-400 w-full'>
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

      <section className='flex p-8 flex-col items-start border-b-2 border-gray-400 w-full'>
        <h2 className="text-2xl  font-bold  text-sky-700 ">
          Formação Acadêmica
        </h2>
        <h3 className='font-bold'>
          Análise e Desenvolvimento de Sistemas (Presencial):
        </h3>
        <p>UniAteneu – Fortaleza/CE</p>
        <p>Início: agosto/2024 – Em andamento | Previsão de conclusão: dezembro/2026</p>
      </section>

      <section className='flex p-8 flex-col items-start border-b-2 border-gray-400 w-full text-left'>
        <h2 className="text-2xl  font-bold  text-sky-700 ">
          Cursos Relevantes
        </h2>
        <h3 className='font-bold'> Bootcamp Desenvolvedor Web Full Stack</h3>
        <p>Labenu (fevereiro/2022 - fevereiro/2023)</p>
        <p className='text-left'>
          Programa com mais de 1000 horas de experiência prática em desenvolvimento
          Full Stack, utilizando metodologias ágeis (Scrum e Kanban). Conteúdo abordado:
        </p>
        <ul className='text-left list-disc ml-7'>
          <li>
            Frontend: HTML, CSS, JavaScript, React, Styled-Components, React Hooks,
            consumo de APIs REST, HTTP
          </li>
          <li>
            Backend: Node.js, Knex, TypeScript, MySQL, SQL, Firebase
          </li>
          <li>
            Ferramentas e Testes: Git, GitHub, AWS, Jest, testes unitários
          </li>
        </ul>
      </section>

      <section className='flex p-8 flex-col items-start border-b-2 border-gray-400 w-full text-left'>
        <h2 className="text-2xl  font-bold  text-sky-700 ">
          Competências Técnicas
        </h2>
        <p>
          <span className='font-bold'>Linguagens de Programação: </span>
          Pyton (Iniciante), JavaScript (Intermediário), TypeScript(Básico)

        </p>
      </section>
      <section className='flex p-8 flex-col items-start border-b-2 border-gray-400 w-full'>
        <h2 className="text-2xl  font-bold  text-sky-700 ">
          Experiência Profissional
        </h2>
        <h3 className='font-bold'>MixTi Soluções Comerciais </h3>
        <p>
          Desenvolvedor web FullSatck (11/2022– 05/2023)
        </p>
        <ul className='text-left list-disc ml-7'>
          <li>
            Manutenção e desenvolvimento de novas aplicações web, incluindo plataformas
            de delivery, dashboards e sistemas diversos.
          </li>
          <li>
            Desenvolvimento de APIs para integração entre serviços e aplicações web
          </li>
          <li>
            Implementação de novas funcionalidades, correção de bugs e otimização
            de interfaces responsivas.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
