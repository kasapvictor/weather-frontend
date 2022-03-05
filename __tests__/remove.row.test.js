import * as fs from 'fs';
import * as path from 'path';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import { queryByAttribute } from '@testing-library/dom';
import '@testing-library/jest-dom';
import testingLibraryUserEvent from '@testing-library/user-event';

const userEvent = testingLibraryUserEvent.default;
const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);
const getFixturePath = (filename) => path.join(dirName, '..', '__fixtures__', filename);
const getContent = (file) => fs.readFileSync((file), 'utf-8');

test('Check Remove Row', () => {
	const div = document.createElement('div')
	const beforePath = getFixturePath('remove.row.html');
	div.innerHTML = getContent(beforePath);
	
	const button = div.querySelector('[data-testid="524894"]');
	const row = div.querySelector('[data-row-city="524894"]');
	
	button.addEventListener('click', () => {
		row.remove();
	});
	userEvent.click(button);
	
	expect(queryByAttribute('data-row-city', div, '524894')).toBeNull();
	expect(div).toMatchSnapshot()
});
