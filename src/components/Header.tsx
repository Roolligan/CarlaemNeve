import "./Header.css";
import { buildWhatsAppLink } from "../utils/whatsapp";
import logo from "../assets/brand/logo-carla.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Eventos", href: "#eventos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" }
];

function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <div className="header__brand">
  <img
    src={logo}
    alt="Carla em Neve – Por Carla Capelatto"
    className="header__brandLogo"
  />
  </div>


        <nav className="header__nav" aria-label="Menu principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="header__link">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="btn btn--primary header__cta"
          href={buildWhatsAppLink("Olá! Gostaria de fazer um pedido.")}
          target="_blank"
          rel="noreferrer"
        >
          Pedir pelo WhatsApp
        </a>
      </div>
    </header>
  );
}

export default Header;
