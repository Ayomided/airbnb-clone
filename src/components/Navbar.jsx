import { FaAirbnb } from 'react-icons/fa6'

function Navbar() {
  return (
    <nav
      className="px-8 py-6 shadow-lg flex text-rose-500"
      style={{ fontFamily: 'Poppins', fontWeight: 'medium' }}
    >
      <FaAirbnb className="text-4xl" />
      <h3 className="pt-1 ml-1 text-2xl">airbnb</h3>
    </nav>
  )
}

export default Navbar
