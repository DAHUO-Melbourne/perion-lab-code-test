import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox";

const defaultProps: CheckboxProps = {
  onChange: jest.fn(),
  label: 'checkbox_label',
};

describe('test Checkbox component', () => {
  test('should render the correct default Checkbox', () => {
    const { getByLabelText, getByText } = render(<Checkbox {...defaultProps} />);
    const checkbox = getByLabelText('filter-unplayed-games');
    const checkboxLabel = getByText('checkbox_label');
    fireEvent.click(checkbox);  
    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
    fireEvent.click(checkboxLabel);
    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
  });
})