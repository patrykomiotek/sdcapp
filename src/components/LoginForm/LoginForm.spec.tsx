import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import fireEvent from "@testing-library/react";
import { LoginRefForm } from "./LoginRefForm";

describe('<LoginForm />', () => {
  it('should display error message for email field', () => {
    const defaultValues = {
      email: 'test@wp.pl',
    }
    const { debug, container } = render(
      <LoginRefForm
        defaultValues={defaultValues}
      />
    );
    // console.log(container);

    const emailField = screen.getByRole('textbox', { name: 'E-mail' });

    userEvent.clear(emailField);

    userEvent.type(emailField, 'abcd666');

    fireEvent.blur(emailField);

    expect(1).toBe(1);
    expect(screen.getByText('E-mail is invalid')).toBeDefined();

    // expect(screen.getByText(t('do-not-have-an-account') as string)).toBeInTheDocument();
    // expect(screen.getByText(t('do-not-have-an-account') as string)).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /send/i }));

  });
});