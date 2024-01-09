import imgFace from '../assets/img/img-face.jpg'
import cn from 'classnames'
import st from '../assets/styles/pageHome.module.styl'
import { Tools } from '@/components'

export default function Home() {
  return (
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
          {/* <a href="" className='btn btn-purple'>Learn more</a> */}
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
        </section>
      </div>
    </main>
  )
}
