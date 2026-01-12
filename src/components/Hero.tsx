import "./Hero.css";
import heroImage from "../assets/hero-cake.svg";
import { buildWhatsAppLink } from "../utils/whatsapp";

const highlights = [
  "Feito sob encomenda",
  "Ingredientes selecionados",
  "Produção artesanal"
];

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">Confeitaria premium</p>
          <h1>Confeitaria artesanal para momentos inesquecíveis.</h1>
          <p className="hero__subtitle">
            Bolos, tortas e sobremesas feitas com carinho, sabor e elegância para
            aniversários, casamentos e datas especiais.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={buildWhatsAppLink(
                "Olá! Gostaria de solicitar um orçamento para um evento."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento no WhatsApp
            </a>
            <a className="btn btn--outline" href="#cardapio">
              Ver cardápio
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image">
            <img src={heroImage} alt="Bolo artesanal em destaque" />
          </div>
          <div className="hero__cards">
            {highlights.map((item) => (
              <div key={item} className="hero__card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
