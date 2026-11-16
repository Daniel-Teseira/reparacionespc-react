import TransitionLink from '../../../components/TransitionLink/TransitionLink';

const questions = [
  ['¿Cuánto cuesta reparar mi computadora?', 'El costo depende de la falla y de los componentes que necesite el equipo. Consultanos las condiciones del diagnóstico y del presupuesto antes de coordinar la revisión.'],
  ['¿Cuánto demora el trabajo?', 'El tiempo depende del diagnóstico, las pruebas necesarias y la disponibilidad de repuestos. Consultá la estimación para tu caso al coordinar el servicio.'],
  ['¿Puedo conservar mis archivos?', 'Avisanos antes de la revisión qué información necesitás conservar. Siempre que sea posible, prepará una copia de seguridad. La recuperación depende del estado del dispositivo y no se puede garantizar sin evaluarlo.'],
  ['¿Pueden ayudarme de forma remota?', 'Algunos problemas de software y configuración pueden revisarse a distancia. Necesitás conexión a internet y autorizar la sesión desde tu computadora. Consultanos si tu caso es apto.'],
  ['¿Qué garantía tiene el servicio?', 'Pedí las condiciones de garantía y del soporte posterior para el trabajo presupuestado. El alcance depende de la reparación y de los componentes utilizados.'],
];

export default function HomeInfo() {
  return <>
    <section className="work-section container" aria-labelledby="work-heading">
      <span className="section-kicker">CÓMO TRABAJAMOS</span>
      <h2 id="work-heading">Coordinamos cada paso con vos.</h2>
      <div className="work-grid">
        {[
          ['01', 'Contanos el problema', 'Indicá qué equipo tenés, qué falla notás y si necesitás conservar archivos. Coordinamos la modalidad de atención.'],
          ['02', 'Consultá el diagnóstico', 'Revisamos el caso y conversamos las alternativas, el presupuesto y los tiempos estimados antes de avanzar.'],
          ['03', 'Acordá el trabajo', 'Confirmá el alcance de la reparación, las pruebas y las condiciones del soporte posterior.'],
        ].map(([number, title, text]) => <article key={number}><span className="work-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
    <section className="faq-section container" aria-labelledby="faq-heading">
      <div><span className="section-kicker">PREGUNTAS FRECUENTES</span><h2 id="faq-heading">Antes de traer tu equipo.</h2><p>Si tu consulta es distinta, contanos qué está pasando.</p><TransitionLink className="button button-quiet" to="/contact">Consultar al técnico <span aria-hidden="true">↗</span></TransitionLink></div>
      <div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </section>
  </>;
}
