import { useState } from 'react'
import svgAdobeXd from '../assets/svg/icon-adobe-xd.svg'
import svgCss from '../assets/svg/icon-css3.svg'
import svgFigma from '../assets/svg/icon-figma.svg'
import svgGatsby from '../assets/svg/icon-gatsby.svg'
import svgGit from '../assets/svg/icon-git.svg'
import svgGraphql from '../assets/svg/icon-graphql.svg'
import svgHTML5 from '../assets/svg/icon-html5.svg'
import svgJira from '../assets/svg/icon-jira.svg'
import svgJquery from '../assets/svg/icon-jquery.svg'
import svgJS from '../assets/svg/icon-js.svg'
import svgNextjs from '../assets/svg/icon-nextjs.svg'
import svgPHP from '../assets/svg/icon-php.svg'
import svgReact from '../assets/svg/icon-react.svg'
import svgSass from '../assets/svg/icon-sass.svg'
import svgStylus from '../assets/svg/icon-stylus.svg'
import svgTrello from '../assets/svg/icon-trello.svg'
import svgTS from '../assets/svg/icon-typescript.svg'
import svgWP from '../assets/svg/icon-wordpress.svg'
import Image from 'next/image'
import st from '../assets/styles/Tools.module.styl'

const tools = [
  {
    srcImg: svgHTML5,
    title: 'HTML5',
  },
  {
    srcImg: svgCss,
    title: 'CSS3',
  },
  {
    srcImg: svgJS,
    title: 'Javascript',
  },
  {
    srcImg: svgTS,
    title: 'Typescript',
  },
  {
    srcImg: svgReact,
    title: 'React',
  },
  {
    srcImg: svgNextjs,
    title: 'Next.js',
  },
  {
    srcImg: svgAdobeXd,
    title: 'Adobe XD',
  },
  {
    srcImg: svgWP,
    title: 'Wordpress',
  },
  {
    srcImg: svgJquery,
    title: 'JQuery',
  },
  {
    srcImg: svgStylus,
    title: 'Stylus',
  },
  {
    srcImg: svgGatsby,
    title: 'Gatsby',
  },
  {
    srcImg: svgPHP,
    title: 'PHP',
  },
  {
    srcImg: svgSass,
    title: 'Sass',
  },
  {
    srcImg: svgGit,
    title: 'Git',
  },
  {
    srcImg: svgGraphql,
    title: 'GraphQL',
  },
  {
    srcImg: svgFigma,
    title: 'Figma',
  },
  {
    srcImg: svgJira,
    title: 'Jira',
  },
  {
    srcImg: svgTrello,
    title: 'Trello',
  },
]

export function Tools() {

  return (
    <ul className={st.core}>
      {tools.map(({ srcImg, title }, index) => (
        <li key={index}>
          <figure>
            <Image src={srcImg} alt={`${title} logo`} />
            <figcaption
              className={st.title}
            >
              <span className="text-size">{title}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}
