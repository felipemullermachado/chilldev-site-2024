import imgFace from '../assets/img/img-face.jpg'
import cn from 'classnames'
import st from '../assets/styles/pageHome.module.styl'

export default function Home() {
  return (
    <main className={st.core}>
      <section className={cn('container', st.hero)}>
        <h1>
          Does your team needs a{' '}
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
    </main>
  )
}
