import React from "react";
import {render, screen} from '@testing-library/react';
import GameCard from "./GameCard";
import { GameCardProps } from "./GameCard";

const defaultProps: GameCardProps = {
  name: 'total war',
  playTime: '1000',
};

describe('test GameCard component', () => {
  test('should render the correct default GameCard', () => {
    const { getByText } = render(<GameCard {...defaultProps} />);
    const nameElement = getByText(defaultProps.name);
    const playTimeElement = getByText(`${defaultProps.playTime}h`);
    expect(nameElement).toBeTruthy();
    expect(nameElement?.tagName).toEqual('SPAN');
    expect(playTimeElement).toBeTruthy();
    expect(playTimeElement?.tagName).toEqual('SPAN');
  });
})