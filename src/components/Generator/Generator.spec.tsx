import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Generator } from "./Generator";

describe('<Generator />', () => {
  it('should generate new value after click', async () => {
    render(<Generator />);
    // debug();

    const uuid = screen.getByText(/[a-z0-9-]{36}/).textContent;

    userEvent.click(screen.getByRole('button', { name: 'Refresh' }));

    const uuidChanged = await screen.findByText(/[a-z0-9-]{36}/).textContent;

    expect(uuid).not.toBe(uuidChanged);
  });

  it('should be visible', () => {
    render(<Generator />);

    const uuid = screen.getByText(/[a-z0-9-]{36}/);

    expect(uuid).toBeDefined();
  });
});