import "./Faq.css";
import { faqItems } from "../data/mock";

function Faq() {
  return (
    <section className="section faq" id="duvidas">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Dúvidas</span>
          <h2 className="section__title">Perguntas frequentes</h2>
          <p className="section__subtitle">
            Tire suas dúvidas e fale diretamente com a Carla para personalizar seu
            pedido.
          </p>
        </div>
        <div className="faq__list">
          {faqItems.map((item) => (
            <details key={item.id} className="faq__item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
