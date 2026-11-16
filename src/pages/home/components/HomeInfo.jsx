import { Link } from 'react-router-dom';
import { questions } from '../../../data/faq';

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
      <div><span className="section-kicker">PREGUNTAS FRECUENTES</span><h2 id="faq-heading">Antes de traer tu equipo.</h2><p>Si tu consulta es distinta, contanos qué está pasando.</p><Link className="button button-quiet" to="/contact">Consultar al técnico <span aria-hidden="true">↗</span></Link></div>
      <div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </section>
  </>;
}
