import TransitionLink from '../../components/TransitionLink/TransitionLink';
import './Error404.css';

const Error404 = () => {
  return (
    <main className="error-page container">
      <span className="error-code">404</span>
      <h1>Esta página no está disponible.</h1>
      <p>El enlace puede haber cambiado o estar escrito incorrectamente.</p>
      <TransitionLink className="button button-primary" to="/home">Volver al inicio <span aria-hidden="true">↗</span></TransitionLink>
    </main>
  )
}

export default Error404
