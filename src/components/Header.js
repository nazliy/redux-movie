import React from 'react'
import  {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to='/'><h2>Logo</h2></Link>        
        <nav>
          <Link to='/'>Anasayfa</Link>
          <Link to='/favorite'>Favoriler</Link>
        </nav>        
    </header>
  )
}

export default Header