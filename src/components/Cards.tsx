import Image, { StaticImageData } from 'next/image'
import st from '../assets/styles/Cards.module.styl'

export function Cards({ cards }: CardsProps) {
  return (
    <ul className={st.core}>
      {cards.map(({ title, company, imgSrc, link }, index) => (
        <li key={index}>
          <section>
            <h3 className="title little-size">{title}</h3>
            <Image src={imgSrc} alt={`${company} company illustration`} />
            <a
              href={link}
              title={`Visit ${company}'s website`}
              target="_blank"
              className="btn"
            >
              Visit Website
              <span></span>
            </a>
          </section>
        </li>
      ))}
    </ul>
  )
}

interface CardsProps {
  cards: Array<{
    title: string
    company: string
    imgSrc: StaticImageData
    link: string
  }>
}
