import "./Steps.css";

const steps = [
  {
    title: "Escolha no cardápio",
    text: "Selecione seus favoritos entre taças, tortas e sobremesas especiais."
  },
  {
    title: "Envie data e quantidade",
    text: "Fale pelo WhatsApp e informe o número de pessoas e a data do evento."
  },
  {
    title: "Combine retirada ou entrega",
    text: "Alinhamos tudo com carinho para você receber sem preocupações."
  }
];

function Steps() {
  return (
    <section className="section steps" id="como-funciona">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Como funciona</span>
          <h2 className="section__title">Um processo leve e acolhedor.</h2>
          <p className="section__subtitle">
            Atendimento direto com a Carla para criar uma experiência sob medida.
          </p>
        </div>
        <div className="steps__grid">
          {steps.map((step, index) => (
            <div key={step.title} className="steps__card card">
              <span className="steps__index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
