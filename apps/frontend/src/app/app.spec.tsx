import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './app';

function renderApp() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}
describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = renderApp();

    expect(baseElement).toBeTruthy();
  });

  it('should have home text', () => {
    const { getByText } = renderApp();
    expect(getByText('home')).toBeTruthy();
  });

});
