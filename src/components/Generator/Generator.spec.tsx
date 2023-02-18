import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Generator } from "./Generator";

describe('<Generator />', () => {
  it('should generate new value after click', async () => {
    render(<Generator />);

    // act(() => {
    //   render(<Generator />);
    // });

    const uuid = screen.getByText(/[a-z0-9-]{36}/).textContent;

    await userEvent.click(screen.getByRole('button', { name: 'Refresh' }));

    const uuidChanged = screen.getByText(/[a-z0-9-]{36}/).textContent;

    expect(uuid).not.toBe(uuidChanged);
  });

  // it('should be visible', async () => {
  //   await waitFor(() => render(<Generator />));
  //   // render(<Generator />);

  //   const uuid = screen.getByText(/[a-z0-9-]{36}/);

  //   expect(uuid).toBeDefined();
  // });
});