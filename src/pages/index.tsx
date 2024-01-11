import imgFace from '../assets/img/img-face.jpg'
import imgMarina from '../assets/img/img-marina-sunshine.png'
import imgAqua from '../assets/img/img-aqua.png'
import imgBliss from '../assets/img/img-bliss.png'
import imgDimas from '../assets/img/img-dimas.png'
import imgLWSA from '../assets/img/img-lwsa.png'
import imgMeetime from '../assets/img/img-meetime.png'
import imgPalazzo from '../assets/img/img-palazzo.png'
import imgPatio from '../assets/img/img-patio-das-artes.png'
import imgRDSummit from '../assets/img/img-rdsummit.png'
import imgUnicred from '../assets/img/img-unicred.png'
import imgPCCR from '../assets/img/img-pccr.png'
import cn from 'classnames'
import st from '../assets/styles/pageHome.module.styl'
import { Cards, Tools, Head } from '@/components'

const cards = [
  {
    title:
      'Institutional website for a group of companies offering technological solutions',
    company: 'LWSA',
    imgSrc: imgLWSA,
    link: 'https://lwsa.tech/',
  },
  {
    title:
      'Land sales campaign for a building construction and urban infrastructure company',
    company: 'Marina Sunshine',
    imgSrc: imgMarina,
    link: 'https://www.marinasunshine.com.br/',
  },
  {
    title: 'Corporate website for an insurance broker',
    company: 'Dimas Seguros',
    imgSrc: imgDimas,
    link: 'https://www.dimasseguros.com.br/',
  },
  {
    title: 'Apartment sales campaign for a building company',
    company: 'Acqua Continentale',
    imgSrc: imgAqua,
    link: 'https://acqua.formacco.com.br/',
  },
  {
    title: 'Blog about financial education for a bank',
    company: 'Unicred - Blog',
    imgSrc: imgUnicred,
    link: 'https://unicred.com.br/centralconexao/suasaudefinanceira/',
  },
  {
    title: 'Apartment sales campaign for a building company',
    company: 'Bliss',
    imgSrc: imgBliss,
    link: 'https://www.cota.com.br/bliss-living/',
  },
  {
    title:
      'Stand management system for Latin America`s largest marketing, sales and innovation fair',
    company: 'Partners RD Summit',
    imgSrc: imgRDSummit,
    link: 'https://patrocinadorrdsummit.rdstation.com/',
  },
  {
    title: 'Apartment sales campaign for a building company',
    company: 'Andreas Palazzo',
    imgSrc: imgPalazzo,
    link: 'https://andreaspalazzo.formacco.com.br/',
  },
  {
    title: 'Career and remuneration plan for bank employees',
    company: 'Career and remuneration - Unicred',
    imgSrc: imgPCCR,
    link: 'https://www.pccrcentralconexao.com.br/',
  },
  {
    title: 'Website for a Sales Engagement platform',
    company: 'Meetime',
    imgSrc: imgMeetime,
    link: 'https://www.meetime.com.br/',
  },
  {
    title: 'Apartment sales campaign for a building company',
    company: 'Pátio das Artes',
    imgSrc: imgPatio,
    link: 'https://www.patiodasartes.com.br/',
  },
]

export default function Home({ pathname }: PageProps) {
  return (
    <>
      <Head pathname={pathname} />
      <main className={st.core}>
      <section className={cn('container', st.hero)}>
        <h1 className="title large-size">
          Does your team need a{' '}
          <span className="block">
            <span className="color-purple">Frontend Developer</span> ?
          </span>
        </h1>
        <p className="large-size">
          I convert user interface prototypes into code, implementing a
          responsive and user-friendly website.
        </p>
        <p className="large-size">
          I work closely with UX/UI designers to deliver the best user
          experience.
        </p>
        <div className={st.containerImg}>
          <img src={imgFace.src} alt="" />
        </div>
      </section>
      <div className="bkg-color-purple">
        <section
          className={cn('container color-white text-center', st.introduce)}
        >
          <h2 className="title">Hi, I'm Felipe. Nice to meet you.</h2>
          <p>
            I'm a frontend developer with over three years of experience in the
            tech industry. Throughout this period, I've engaged in remote work
            for agencies and collaborated with skilled individuals to craft
            digital products catering to both business and consumer needs. I
            have a passion for bringing creative ideas proposed by UI/UX
            designers to life.
          </p>
        </section>
      </div>
      <div className="container">
        <section className={st.skillsList}>
          <h2 className="title text-center">Technical skills</h2>
          <p className="text-center">
            I have experience working with the following languages and tools:
          </p>
          <Tools />
        </section>
      </div>
      <div className="container">
        <section>
          <h2 className="title text-center">My Recent Work</h2>
          <p className="text-center">
            Here are some previous projects I've worked on. Want to see more?
            Contact me.
          </p>
          <Cards cards={cards} />
        </section>
      </div>
    </main>
    </>
  )
}
