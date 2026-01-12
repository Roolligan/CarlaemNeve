import "./Header.css";
import { buildWhatsAppLink } from "../utils/whatsapp";

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
        <div className="header__brand" aria-label="Carla em Neve">
          <span className="header__logo">Carla em Neve</span>
          <span className="header__subtitle">Por Carla Capelatto</span>
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
