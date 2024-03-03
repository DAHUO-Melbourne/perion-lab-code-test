import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import Button from "./Button";
import { ButtonProps } from "./Button";

const defaultProps: ButtonProps = {
  onClick: jest.fn()
};

describe('test Button component', () => {
  test('should render the correct default button', () => {
    render(<Button {...defaultProps}>TEXT</Button>);
    const element = screen.queryByText('TEXT');
    expect(element).toBeTruthy();
    expect(element?.tagName).toEqual('BUTTON');
    expect(element?.classList.contains('button')).toBe(true);
    element && fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
})