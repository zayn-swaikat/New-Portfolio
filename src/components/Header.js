import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { HiOutlineArrowDownTray } from 'react-icons/hi2';

function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
    {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    <Navbar expand="lg" className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
      <Container>
        <Navbar.Brand as={Link} to="/">Zayn Swaikat</Navbar.Brand>

        <div className='icons-hamburger'>
          <button
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="hamburger switch"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <Navbar.Collapse id="basic-navbar-nav" in={open}>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => setOpen(false)}>Home</Nav.Link>
            <Nav.Link href="#skills" onClick={() => setOpen(false)}>Skills</Nav.Link>
            <Nav.Link href="#projects" onClick={() => setOpen(false)}>Projects</Nav.Link>
            <Nav.Link href="#process" onClick={() => setOpen(false)}>How I Build</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setOpen(false)}>Connect</Nav.Link>
<Nav.Link 
  href="/Resume.pdf" 
  download="Zayn_Swaikat_Resume.pdf" 
  onClick={() => setOpen(false)} 
  className="resume-link"
>
  Download Resume <HiOutlineArrowDownTray style={{ marginLeft: '0.3rem', marginBottom: '0.2rem' }} />
</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </>
  );
}

export default Header;
