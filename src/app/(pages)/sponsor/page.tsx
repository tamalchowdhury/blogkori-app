import { Metadata } from "next"
import { EnglishTitle } from "../../components/english-title"

const title = "Sponsor BlogKori"

export const metadata: Metadata = {
  title,
  description: title,
}

export default function SponsorPage() {
  return (
    <>
      <EnglishTitle>{title}</EnglishTitle>
      <div className='post__body text-[16px] md:text-[20px]'>
        <p>Support BlogKori by being a sponsor.</p>
        <p>There are a few ways to sponsor this site.</p>
        <h2>Sponsored Content</h2>
        <p>
          Become a sponsor by purchasing a paid link in the sidebar or
          commissioning a paid review. Please send me an email:
          <br />
          <strong>mail [at] tamalchowdhury [dot] com</strong>
        </p>
        <h2>Sharing is Caring</h2>
        <p>
          Share this site with your friends and family. Share it on social media
          and help spread the word.
        </p>
      </div>
    </>
  )
}
