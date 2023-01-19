import { Link } from 'react-router-dom';

const Navbar= () => {
  return (
    <nav className='row navbar'>
      <h1 className='nav-title'><Link to="/" className='no-style'>Books Store CMS</Link></h1>
      <ul className='row no-style nav-list'>
        <div className='row'>
        <li><Link to="/" className='no-style nav-btns'>Books</Link></li>
        <li><Link to="/categories" className='no-style nav-btns'>Categories</Link></li>
        </div>
        <li><Link to="#" className='no-style nav-btns flex-center profile'>P</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar