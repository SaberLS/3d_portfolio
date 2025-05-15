import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section>
      <h2 className="mt-5 font-semibold text-2xl text-center  gap-3 text-black/90">
        Have a project in mind?
        {' '}
        <br className="block md:hidden" />
        Let’s build something together!
        <Link to="/contact" className="rounded-lg ml-2 hover:scale-105 transition-transform text-blue-600 hover:text-blue-500">
          Contact
        </Link>
      </h2>
    </section>
  )
}

export default CTA
