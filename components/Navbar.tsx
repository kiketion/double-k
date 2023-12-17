import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link className='navbar-link' href='/'>
        Home
      </Link>
      <Link className='navbar-link' href='/posts'>
        Posts
      </Link>
      <Link className='navbar-link' href='/about'>
        About
      </Link>
    </div>
  );
}
