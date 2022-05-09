import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import './styles.css'

export function Header() {
  return (
    <header>
      <nav className="container">
        <div className='dsmovie-nav-content'>
          <h1 className='text-white font-weight-bold'>DSMovie</h1>
          <a href="https://github.com/vtrajanodev">
            <div className='d-flex text-white'>
              <GithubIcon />
              <p>/vtrajanodev</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}