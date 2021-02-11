import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import './styles/sobre.scss'

import ProfileImage from '../components/ProfileImage'
import TechnologiesShelf from "../components/TechnologiesShelf"

const getYearsOld = () => {
  const bornYear = 1998
  const bornMonth = 4
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()

  if (currentMonth >= bornMonth) {
    return currentYear - bornYear
  }

  return currentYear - bornYear - 1
}

const SobrePage = () => (
  <Layout>
    <SEO title="Sobre" />
    <section className="about">
      <div className="about__short-presentation">
        <ProfileImage className="about__profile-image"/>
        <h1 className="about__name">
          Bruno,
        </h1>

        <p className="about__infos">
          { getYearsOld() } anos, São Paulo - Brasil
        </p>
        
        <ul className="about__interests-list">
          <li className="about__interests-item"><span role="img" aria-label="Computador">💻</span> Desenvolvedor WEB</li>
          <li className="about__interests-item"><span role="img" aria-label="Guitarra">🎸</span> Toco guitarra e ukulele</li>
          <li className="about__interests-item"><span role="img" aria-label="Controle de video-game">🎮</span> Jogo desde criança</li>
          <li className="about__interests-item"><span role="img" aria-label="Cachorro">🐶</span> Gosto muito de animais</li>
          <li className="about__interests-item"><span role="img" aria-label="Pintor">👨🏻‍🎨</span> Formado em Design Digital</li>
          <li className="about__interests-item"><span role="img" aria-label="Fone de ouvido">🎧</span> Ouço muito Pearl Jam</li>
          <li className="about__interests-item"><span role="img" aria-label="Pessoa caminhando">🚶🏻‍♂️</span> Gosto de andar por ai</li>
        </ul>
      
        <div className="about__technologies">
          <h3 className="about__section-title">
            Algumas tecnologias
          </h3>

          <TechnologiesShelf />
        </div>
      </div>
    
      <div className="about__history">
        <h2 className="about__section-title">História na programação</h2>
        <p>
          Provavelmente meu primeiro código escrito foi "shutdown -t 30 -s -f" em um arquivo .bat que eu enviada para os amigos da escola no MSN para ver eles ficando offline.
        </p>

        <p>
          Depois disso achei na internet como fazer uma página fake do Orkut para pegar a senha de quem se logava por ela via PHP, hospedei em um servidor gratuito e salvei essa página no desktop dos computadores da biblioteca da escola. Esse foi meu primeiro contato com desenvolvimento web.
        </p>

        <p>
          Comecei a perceber que eu me divertia muito mais alterando os textos e cor de fundo da página do Orkut do que usando as senhas dos meus colegas de escola, pois apesar de me sentir o máximo tendo a senha deles, eu não conseguia fazer nada por saber que era errado e por medo das consequências.
        </p>

        <p>
          Vendo que eu levava jeito com programação optei por fazer ensino médio técnico em informática, e no primeiro ano, meu pai me pediu ajuda com o site da empresa, onde eu tive que desenvolver um sistema de chamados técnicos e um formulário de avaliação de serviço feitos em PHP e MySql. Demorei mais de um ano para finalizar, pois eu só o via de 15 em 15 dias e trabalhava apenas nesses finais de semana.
        </p>

        <p>
          No terceiro ano do ensino médio eu tive aula de computação gráfica, onde vi um pouco sobre 3D e edição de vídeo, me apaixonei, o que fez eu optar por uma faculdade que tivesse programação e design, por isso me formei em Design Digital.
        </p>

        <p>
          No primeiro ano da faculdade, em 2016, em minha primeira entrevista feita na vida, passei para vaga de estágio de desenvolvimento WEB na Jüssi. Na época estava inseguro, pois estava me divertindo mais editando vídeos do que escrevendo códigos, porém, isso mudou drasticamente após um tempo.
        </p>

        <p>
          Minhas primeiras demandas foram desenvolver templates de e-mails marketing apenas usando HTML e o mínimo de CSS (meu conhecimento não passava muito disso também), mas logo comecei a cuidar de um e-commerce cliente da agência.
        </p>

        <p>
          No término do contrato de estágio fui efetivado, e comecei a pegar uma série de demandas diferentes como landing pages, blogs, sites, lojas virtuais... Acredito que tenha sido o período que eu mais me desenvolvi, e não apenas tecnicamente.
        </p>

        <p>
          Em quatro meses de efetivação eu fui promovido, e nesse novo cargo eu comecei a cuidar de lojas virtuais, feitas em VTEX, VTEX.IO e React.
        </p>

        <p>
          Certo momento da empresa, meus amigos mais próximos começaram a sair de lá, e eu senti que meu momento estava chegando também. Então entrei em uma vaga de desenvolvedor front-end dentro da área de CRM do Banco Pan com a proposta de fazer apenas landing pages.
        </p>

        <p>
          Passei algum tempo fazendo as landing pages, mas logo apareceu a necessidade de uma integração da salesforce com uma aplicação externa, onde perguntaram despretensiosamente se eu conseguiria fazer, e eu mais despretensiosamente ainda respondi que poderia tentar. Fiz a aplicação em node.js e deu super certo (tirando que o banco não usa node e passaram meu código para outra equipe reescrever em .NET <span role="img" aria-label="Emoji chorando com um sorriso">🥲</span>).
        </p>

        <p>
          Fui transferido para a área de marketing responsável por cuidar do site institucional e do formulário de solicitação de novos cartões de crédito, onde permaneço até hoje trabalhando nas demandas diárias e planejando a refatoração deles.
        </p>
      </div>
    </section>
  </Layout>
)

export default SobrePage
