import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AuthCredentials } from './AuthCredentials';
import { AuthProvider } from './AuthContext';

describe('<AuthCredentials /> component', () => {
  it('should toggle context value', async () => {
    // render(<AuthProvider><AuthCredentials /></AuthProvider>);
    render(<AuthProvider><AuthCredentials /></AuthProvider>);

    // expect(screen.getByText(/Is user logged? no/i)).toBeDefined();
    // expect(screen.getByText(/Is user logged\?/i)).toBeDefined();
    // expect(screen.getByText('Is user logged?')).toBeDefined();
    expect(screen.getByText(/no/i)).toBeDefined();

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByText(/yes/i)).toBeDefined();
  });
});