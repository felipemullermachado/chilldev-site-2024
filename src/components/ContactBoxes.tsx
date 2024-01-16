import Image from 'next/image'
import imgWork from '../assets/img/img-work.png'
import st from '../assets/styles/ContactBoxes.module.styl'
import { Form } from '.'

export function ContactBoxes() {
  return (
    <div className={st.core}>
      <div className={st.introduce}>
        <div className={st.containerImg}>
          <Image src={imgWork} alt="" />
        </div>
        <section>
          <h3 className="title">Felipe Müller</h3>
          <p className="no-margin">Front-end Developer</p>
          <p>I&apos;m available for freelance or full-time positions.</p>
          <p>Contact me and let&apos;s talk.</p>
          <p>Connect with me:</p>
          <ul className={st.listConnect}>
            <li>
              <a
                href="https://www.linkedin.com/in/felipemullermachado/"
                target="_blank"
                title="Visit Felipe`s Linkedin profile"
                className={st.linkedin}
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="mailto:felipemullermachado@gmail.com"
                title="Send e-mail to Felipe Müller"
                className={st.email}
              >
                E-mail
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className={st.formContainer}>
        <section>
          <h3 className="text-size large-size">
            Got a question or proposal, or just want to say hello? <span className="block-mobile">Go ahead.</span>
          </h3>
          <Form
            inputs={[
              {
                label: 'Name *',
                name: 'name',
                placeholder: 'Enter your name',
              },
              {
                label: 'Phone Number',
                name: 'phone',
                mask: 'phone',
                placeholder: 'Enter your full phone number',
                required: false,
              },
              {
                label: 'Email *',
                name: 'email',
                type: 'email',
                placeholder: 'Enter your email',
              },
              {
                label: 'Subject *',
                name: 'subject',
                placeholder: 'Describe the subject',
              },
              {
                label: 'Message *',
                name: 'message',
                type: 'textarea',
                placeholder: 'How can I help you?',
              },
            ]}
            button={<button className="btn">Send message</button>}
            idPrefix="contact"
          />
        </section>
      </div>
    </div>
  )
}
