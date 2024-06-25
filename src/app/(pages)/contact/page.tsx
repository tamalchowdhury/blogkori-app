import { Metadata } from "next"
import { EnglishTitle } from "../../components/english-title"

const title = "Contact Me"

export const metadata: Metadata = {
  title,
  description: title,
}

export default function ContactPage() {
  return (
    <>
      <EnglishTitle>{title}</EnglishTitle>
      <div className='post__body text-[16px] md:text-[20px]'>
        <p>
          To contact me send me an email at the following address:
          <br />
          <strong>mail [at] tamalchowdhury [dot] com</strong>
        </p>
        <p>
          If you need to call me or meet me, please let me know it in the email.
          I check my email regularly and will get back to you as soon as
          possible for urgent matters.
        </p>
      </div>
    </>
  )
}
