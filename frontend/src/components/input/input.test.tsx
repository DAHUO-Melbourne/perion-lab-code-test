import React from "react";
import {fireEvent, render} from '@testing-library/react';
import Input from "./Input";
import { InputProps } from "./Input";
import '@testing-library/jest-dom/extend-expect';

const mockOnSubmit = jest.fn();

const defaultProps: InputProps = {
  value: '',
  setValue: jest.fn(),
  onSubmit: mockOnSubmit,
};

describe('test Input component', () => {
  test('should render the correct default input', () => {
    const { getByRole, rerender, getByText, getByTestId  } = render(<Input {...defaultProps} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: '76561198367206862' } });
    expect(defaultProps.setValue).toHaveBeenCalled();
    rerender(<Input {...defaultProps} value="76561198367206862" />);
    expect(input).toHaveValue('76561198367206862');
    const arrowIcon = getByTestId('arrow_forward');
    fireEvent.click(arrowIcon);
    expect(mockOnSubmit).toHaveBeenCalled();
  });
})