import "./Footer.css";
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Copyright &copy; {year}</p>
    </footer>
  );
}

export default Footer;
