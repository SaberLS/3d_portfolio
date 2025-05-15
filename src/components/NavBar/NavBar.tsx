import NavButton from './NavButton'
import type { PathItems } from './types'

type NavBarProps = {
  paths: PathItems
}

function NavBar({ paths }: NavBarProps) {
  return (
    <header className="z-50 relative top-2 header max-w-150 m-auto">
      <nav className="flex text-lg justify-around items-center w-full font-medium">
        {paths?.map((path, i) =>
          <NavButton key={i} label={path?.label} to={path?.to} />,
        )}
      </nav>
    </header>
  )
}

export default NavBar
