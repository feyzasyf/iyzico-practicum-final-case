
import {render, screen, fireEvent} from '@testing-library/react';
import Button from './button';


test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}/>)
  fireEvent.click(screen.getByTestId("base btn"))
  expect(handleClick).toHaveBeenCalledTimes(1);
})