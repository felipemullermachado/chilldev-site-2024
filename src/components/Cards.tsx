import Image, { StaticImageData } from 'next/image'
import { useBreakpoints } from '@/hooks'
import Slider from '@fil1pe/react-slider'
import st from '../assets/styles/Cards.module.styl'

export function Cards({ cards }: CardsProps) {
  const breakpoint = useBreakpoints()
  return (
    <>
      {breakpoint !== 'phone' ? (
        <ul className={st.core}>
          {cards.map(({ title, company, imgSrc, link }, index) => (
            <li key={index} className={st.card}>
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
                </a>
              </section>
            </li>
          ))}
        </ul>
      ) : (
        <div className={st.core}>
          <Slider slidesToShow={1}>
            {cards.map(({ title, company, imgSrc, link }, index) => (
              <section key={index} className={st.card}>
                <h3 className="title little-size">{title}</h3>
                <Image src={imgSrc} alt={`${company} company illustration`} />
                <a
                  href={link}
                  title={`Visit ${company}'s website`}
                  target="_blank"
                  className="btn"
                >
                  <span>Visit Website</span>
                </a>
              </section>
            ))}
          </Slider>
        </div>
      )}
    </>
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
