import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link className='navbar-brand' to='/'>Aplicação SPA</Link>
          </div>
          <ul className='nav navbar-nav'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/list'>List</Link>
            </li>
            <li>
              <Link to='https://www.ahnegao.com.br/'>Ahnegao</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}