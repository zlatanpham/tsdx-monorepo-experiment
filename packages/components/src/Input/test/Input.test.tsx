import * as React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import Input from '../index';

describe('Search', () => {
  test('Should handle onChange correctly', () => {
    const onChangeSpy = jest.fn();
    const { container } = render(<Input value="" onChange={onChangeSpy} />);

    const input = container.querySelector('input');

    act(() => {
      fireEvent.keyDown(input!, { key: 'Escape', code: 27, charCode: 27 });
    });
    expect(onChangeSpy).toBeCalledTimes(1);
    expect(onChangeSpy).toHaveBeenLastCalledWith('');
  });
});
