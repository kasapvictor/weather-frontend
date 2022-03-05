/**
 * @jest-environment jsdom
 */

import * as fs from 'fs';
import * as path from 'path';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {
	getByLabelText,
	getByText,
	getByTestId,
	queryByTestId,
	waitFor,
} from '@testing-library/dom'
import '@testing-library/jest-dom';
import testingLibraryUserEvent from '@testing-library/user-event';

const userEvent = testingLibraryUserEvent.default;

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);
const getFixturePath = (filename) => path.join(dirName, '..', '__fixtures__', filename);
const getContent = (file) => fs.readFileSync((file), 'utf-8');

function getExampleDOM() {
	const div = document.createElement('div')
	const beforePath = getFixturePath('remove.row.html');
	const beforeContent = getContent(beforePath);
	
	div.innerHTML = getContent(beforePath);
	
	const button = div.querySelector('[data-remove-city="524894"]');
	button.addEventListener('click', () => {
		setTimeout(() => {
			const row = document.querySelector('[data-row-city="524894"]');
			row.remove();
			
		}, Math.floor(Math.random() * 200))
	});
	
	return div;
}

test('Remove Row', async () => {
	const container =  getExampleDOM();
	getByTestId(container, '524894').click();
	
	await waitFor(() =>
		expect(queryByTestId(container, '524894')).toBeTruthy(),
	)
	
	expect(container).toMatchSnapshot()
});
