import "./Events.css";
import { events } from "../data/mock";
import { buildWhatsAppLink } from "../utils/whatsapp";

function Events() {
  return (
    <section className="section events" id="eventos">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Eventos</span>
          <h2 className="section__title">Doces pensados para cada celebração.</h2>
          <p className="section__subtitle">
            Atendemos ocasiões especiais com combinações sob medida e atendimento
            exclusivo.
          </p>
        </div>
        <div className="events__grid">
          {events.map((event) => (
            <div key={event.id} className="events__card card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
        <a
          className="btn btn--primary events__cta"
          href={buildWhatsAppLink("Olá! Quero encomendar para um evento.")}
          target="_blank"
          rel="noreferrer"
        >
          Quero encomendar para um evento
        </a>
      </div>
    </section>
  );
}

export default Events;
