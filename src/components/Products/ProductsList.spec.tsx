import { screen, render } from '@testing-library/react';

import { ProductsList } from './ProductsList';

describe('<ProductList /> component', () => {
  it('should display Loading indicator', () => {
    render(<ProductsList />);
    expect(screen.getByText('Loading...')).toBeDefined();
  });
  it('should display products', async () => {
    const { debug } = render(<ProductsList />);
    // expect(screen.getByText('Loading...')).toBeDefined();

    expect(await screen.findByText('iPhone 17')).toBeDefined();

  });
});