import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { useState } from 'react';
const Navbar= () => {
  const [activePath, setActivePath] = useState('/')
  return (
    <nav className='row navbar'>
      <h1 className='nav-title'><Link to="/" className='no-style'>Books Store CMS</Link></h1>
      <ul className='row no-style nav-list'>
        <div className='row'>
        <li><Link to="/" 
          className={'no-style nav-btns' + (activePath === '/'? " active": "")}
          onClick={()=>setActivePath('/')}>Books</Link></li>
        <li><Link to="/categories" 
          className={'no-style nav-btns' + (activePath === '/categories'? " active": "")}
          onClick={()=>setActivePath('/categories')}>Categories</Link></li>
        </div>
        <li><Link to="#" className='no-style nav-btns flex-center profile'>
        <FaUser />
        </Link></li>
      </ul>
    </nav>
  )
}

export default Navbar