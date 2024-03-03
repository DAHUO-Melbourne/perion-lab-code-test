import React from "react";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Thumbnail from "./Thumbnail";

const defaultProps = {
  src: 'image-src-string'
};

describe('test thumbnail component', () => {
  test('should render the correct default Thumbnail', () => {
    const { getByAltText } = render(<Thumbnail {...defaultProps} />);
    const thumbnailImage = getByAltText('thumbnail');
    expect(thumbnailImage).toHaveAttribute('src', 'image-src-string');
    expect(thumbnailImage?.classList.contains('thumbnail')).toBe(true);
  })
})