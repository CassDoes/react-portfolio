import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    
  <nav className='fixed top-0'>
    <div className="flex justify-around mx-5 lg:justify-start mt-4">
      <div className="hidden md:contents text-xl font-bold py-3">

        <div className="mx-4 py-1 box">
          <Link to="/" className="px-1" id='contents'>ABOUT</Link>
        </div>

        <div className="mx-4 py-1 box">
          <Link to="/contact" className="px-1">CONTACT</Link>
        </div>

        <div className="mx-4 py-1 box">
          <Link to="/portfolio" className="px-1">PORTFOLIO</Link>
        </div>

        <div className="mx-4 py-1 box">
          <Link to="/resume" className="px-1">RESUME</Link>
        </div>

      </div>
    </div>
  </nav>
  );
}

export default Navigation;