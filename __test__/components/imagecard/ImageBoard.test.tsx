import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ImageBoard from '../../../components/imagecard/ImageBoard';

describe('ImageBoard', () => {
	test('一定の高さになった時に列が追加されるか', async () => {
		const originalEventFunc = window.addEventListener;
		const spy = jest.spyOn(window, 'addEventListener');

		let addedResizeEvent = false;
		spy.mockImplementation((...args) => {
			originalEventFunc(...args);

			const [type] = args;
			if (type === 'resize') {
				addedResizeEvent = true;
			}
		});

		const { container } = render(<ImageBoard />);
		await waitFor(() => expect(addedResizeEvent).toBeTruthy());

		const beforeLineLength = container.getElementsByClassName('image-line-anim').length;

		window.innerHeight += 1000;
		fireEvent.resize(window);

		expect(container.getElementsByClassName('image-line-anim').length).toBeGreaterThan(
			beforeLineLength,
		);
	});
});
