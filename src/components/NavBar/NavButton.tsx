import { NavLink } from 'react-router-dom'
import type { PathItem } from './types'

function NavButton({ to, label }: PathItem) {
  return (
    <NavLink to={to} className="rounded-lg m-1 bg-white items-ceter justify-center flex font-bold shadow-md p-2 hover:scale-105 transition-transform text-blue-600 hover:text-blue-500">
      <span className="transition-all">{label}</span>
    </NavLink>
  )
}

export default NavButton
