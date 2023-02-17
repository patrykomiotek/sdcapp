import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Generator } from "./Generator";

describe('<Generator />', () => {
  it('should generate new value after click', async () => {
    const { debug } = render(<Generator />);
    debug();

    const button = screen.getByRole('button', { name: 'Refresh' });
    const uuid = screen.getByText(/[a-z0-9-]{36}/).textContent;
    console.log('uuid: ', uuid);

    await userEvent.click(button);

    const uuidChanged = screen.getByText(/[a-z0-9-]{36}/).textContent;
    console.log('uuidChanged: ', uuidChanged);

    expect(uuid).not.toBe(uuidChanged);
  });

  it('should be visible', () => {
    render(<Generator />);

    const uuid = screen.getByText(/[a-z0-9-]{36}/);

    expect(uuid).toBeDefined();
  });
});