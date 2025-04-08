import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kpop-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpop-history.component.html',
  styleUrls: ['./kpop-history.component.css'],
})
export class KpopHistoryComponent {
  generations = [
    {
      title: '1ª Geração (1992-2004): Os Pioneiros',
      description: `O K-pop surgiu nos anos 90 com Seo Taiji and Boys misturando hip-hop e rock à música coreana.
                    Foi a base para o modelo de idols, com treinamentos intensos e performances elaboradas.
                    Grupos como H.O.T, S.E.S, Sechs Kies e Shinhwa dominaram essa época.
                    O sucesso ainda era restrito à Coreia do Sul e algumas partes da Ásia.
                    As coreografias começaram a se tornar um elemento essencial nos shows e clipes.
                    Essa geração preparou o terreno para a expansão global do K-pop.`,
      image:
        'https://pbs.twimg.com/media/FDzP4AWaIAECyrc.jpg?format=jpg&name=large',
      alt: 'S.E.S',
    },
    {
      title: '2ª Geração (2005-2011): A Onda Hallyu',
      description: `O K-pop começou a se expandir para a Ásia, impulsionado pelo idol system das grandes empresas.
                    Grupos como TVXQ, Super Junior, BIGBANG, Girls’ Generation e Wonder Girls surgiram.
                    O YouTube ajudou a levar o K-pop para um público internacional.
                    As músicas começaram a incorporar elementos do pop ocidental e da música eletrônica.
                    Coreografias e conceitos visuais se tornaram mais elaborados e chamativos.
                    Essa geração preparou o K-pop para o sucesso global da próxima fase.`,
      image:
        'https://pbs.twimg.com/media/E48tA1OVkAIcinn.jpg?format=jpg&name=large',
      alt: "Girls' Generation",
    },
    {
      title: '3ª Geração (2012-2017): A Explosão Global',
      description: `O K-pop explodiu mundialmente com o crescimento das redes sociais e plataformas de streaming.
                    Grupos como BTS, BLACKPINK, EXO, TWICE e SEVENTEEN começaram a dominar as paradas.
                    O contato direto com fãs através de Twitter, Instagram e V Live fortaleceu o fandom global.
                    Houve maior investimento em videoclipes, turnês internacionais e colaborações ocidentais.
                    BTS quebrou recordes na Billboard e BLACKPINK se tornou um fenômeno mundial.
                    Essa geração consolidou o K-pop como uma força global na indústria da música.`,
      image:
        'https://pbs.twimg.com/media/GnLQkJ6XsAAHHcj.jpg?format=jpg&name=large',
      alt: 'Twice',
    },
    {
      title: '4ª Geração (2018-2022): A Nova Era',
      description: `O K-pop passou a dominar o TikTok e plataformas digitais, com músicas virais e conceitos inovadores.
                    Grupos como Stray Kids, aespa, ITZY, TXT, NewJeans e LE SSERAFIM trouxeram novas sonoridades.
                    A estética dos videoclipes ficou mais diversificada, indo do retrô ao futurista.
                    Músicas incorporaram influências de hyperpop, trap e EDM, ampliando a experimentação sonora.
                    O uso de inteligência artificial, avatares virtuais e performances em AR/VR cresceu.
                    O K-pop se consolidou como um dos gêneros mais influentes da cultura pop global.`,
      image:
        'https://pbs.twimg.com/media/GnVeHoDbUAA1dkt.jpg?format=jpg&name=large',
      alt: 'aespa',
    },
    {
      title: '5ª Geração (2023-Presente): A Era da Conexão',
      description: `Ainda emergente, essa geração foca em tecnologia, inovação visual e novas sonoridades.
                    Grupos como RIIZE, ILLIT, BABYMONSTER, TWS e ZEROBASEONE começam a ganhar destaque.
                    A presença de inteligência artificial e realidade aumentada se torna cada vez maior.
                    O conceito de idols virtuais e performances digitais se torna mais popular.
                    O K-pop se adapta para conquistar novos públicos e expandir sua influência global.
                    O futuro ainda está sendo moldado, mas promete mais evolução e experimentação`,
      image:
        'https://pbs.twimg.com/media/GmzZMbMWsAA7HFp.jpg?format=jpg&name=small',
      alt: 'ILLIT',
    },
  ];

  // Dados para a seção de impacto cultural (melhorado)
  culturalImpact = {
    title: 'Impacto Cultural e Econômico',
    description: `O K-pop se tornou um fenômeno global, movimentando bilhões na economia sul-coreana por meio de álbuns, turnês e turismo. Além de popularizar a língua coreana e impulsionar setores como a K-beauty e a moda, fortaleceu o soft power da Coreia do Sul, promovendo sua cultura e influenciando tendências ao redor do mundo.`,
  };

  // Dados para a seção de futuro do K-pop (melhorado)
  future = {
    title: 'O Futuro do K-pop',
    description: `O K-pop continuará inovando com tecnologias como realidade aumentada (AR) e virtual (VR), oferecendo experiências imersivas para os fãs. A diversidade e a globalização dos grupos devem crescer, tornando o gênero ainda mais acessível. No entanto, desafios como a saúde mental dos idols e a pressão do mercado exigirão novas abordagens da indústria.`,
  };
}
