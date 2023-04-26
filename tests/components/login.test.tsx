import { render, screen } from '@testing-library/react';
import Login from '../../src/components/Login/index';

describe('<Login />', () => {
  it('should render the heading', () => {
    render(<Login />);

    expect(
      screen.getByRole('heading', { name: /THE BEST FOR YOUR PET!/i })
    ).toBeInTheDocument();
  });
});
