import "./Testimonials.css";
import { testimonials } from "../data/mock";

function Testimonials() {
  return (
    <section className="section testimonials" id="depoimentos">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Depoimentos</span>
          <h2 className="section__title">Quem prova, se apaixona.</h2>
          <p className="section__subtitle">
            Histórias reais de eventos que ficaram ainda mais especiais.
          </p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonials__card card">
              <div className="testimonials__stars" aria-label="5 de 5">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <svg
                    key={`${testimonial.id}-star-${index}`}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.2l2.7 5.5 6 0.9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6-4.3-4.2 6-0.9z" />
                  </svg>
                ))}
              </div>
              <p className="testimonials__text">"{testimonial.text}"</p>
              <div className="testimonials__author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.event}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
