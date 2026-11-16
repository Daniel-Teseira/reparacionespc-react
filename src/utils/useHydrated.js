import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

// El HTML estático no conoce los parámetros de consulta. Mantener el primer
// render idéntico permite aplicar filtros y selecciones después de hidratar.
export default function useHydrated() {
  return useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
}
