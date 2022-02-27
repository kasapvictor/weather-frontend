import List from 'list.js';

// https://listjs.com/examples/existing-list-add/

const optionsList = {
	valueNames: [ 'name', 'city' ],
	item: '<li><h3 class="name"></h3><p class="city"></p></li>'
};

const valuesList = [
	{ name: 'Jonny', city:'Stockholm' }
	, { name: 'Jonas', city:'Berlin' }
];

const searchList= new List('hacker-list', optionsList, valuesList);
