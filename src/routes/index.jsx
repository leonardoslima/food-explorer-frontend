import { BrowserRouter } from 'react-router-dom';

import { AuthRoutes } from './auth.routes';
import { App } from './app.routes';

export function Routes() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}