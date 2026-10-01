import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the home page with the services section', () => {
  render(
    <MemoryRouter initialEntries={['/home']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: /Soluciones para que tu equipo/ })).toBeInTheDocument();
  expect(screen.getByText('Limpieza y Mantenimiento General')).toBeInTheDocument();
});
