import "./Contact.css";
import { buildWhatsAppLink } from "../utils/whatsapp";

function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container contact__content">
        <div className="contact__text">
          <div className="section__header">
            <span className="section__eyebrow">Contato</span>
            <h2 className="section__title">Vamos criar algo especial juntos?</h2>
            <p className="section__subtitle">
              Fale com a Carla no WhatsApp para receber um atendimento pessoal e
              carinhoso.
            </p>
          </div>
          <a
            className="btn btn--primary"
            href={buildWhatsAppLink("Olá! Quero falar com a Carla sobre meu evento.")}
            target="_blank"
            rel="noreferrer"
          >
            Falar com a Carla no WhatsApp
          </a>
        </div>
        <div className="contact__highlight">
          <div className="card">
            <h3>WhatsApp</h3>
            <p>Atendimento rápido e direto para tirar dúvidas e reservar datas.</p>
            <p className="contact__number">+55 11 99375-8826</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
