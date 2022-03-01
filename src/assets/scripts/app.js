import cityList from './city.list.json';
import onChange from 'on-change';
import axios from 'axios';

// console.log(process.env.SECRET_KEY)
console.log(cityList);

const apiDataOfCity = async (url) => {
	try {
		const {data} = await axios.get(url);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log('ERROR', error);
			console.log('ERROR RESPONSE', error.response);
			console.log('ERROR RESPONSE DATA', error.response.data.error);
			return error.response;
		}
	}
};

const buildUrl = (config, lat, lon) => {
	const baseUtl = config.api.url;
	const appId = config.api.appid;
	const exclude = config.api.exclude;
	const units = config.api.units;
	return `${baseUtl}${appId}${exclude}${units}${lat}${lon}`;
};

const updateDataOfCities = async (state, config) => {
	const cities = state.cities.sort();
	
	return new Promise(async (resolve) => {
		for (const city of cities) {
			const findCity = cityList.find((item) => item.name.toLowerCase() === city);
			const lon = `&lon=${findCity.coord.lon}`;
			const lat = `&lat=${findCity.coord.lat}`;
			const url = buildUrl(config, lat, lon);
			const dataOfCity = await apiDataOfCity(url);
			
			const currentTemp = dataOfCity.current.temp;
			const currentIco = dataOfCity.current.weather[0].icon;
			const current = {
				temp: currentTemp,
				ico: currentIco,
			};
			
			const daily = dataOfCity.daily.map((day) => {
				const temp = day.temp.day;
				const ico = day.weather[0].icon;
				return {temp, ico};
			});
			
			state.weather = [
				...state.weather,
				{
					name: findCity.name,
					data: [{...current}, ...daily],
				}];
		}
		
		resolve();
	});
};

const getDate = (numberOfDay = 0) => { // 26.02.22
	const today = new Date();
	const nextDay = new Date(today);
	const date = nextDay.setDate(nextDay.getDate() + numberOfDay); // 1645974081243
	const newDate = new Date(date);
	
	return newDate.toLocaleDateString(
		'RU', {
			year: '2-digit',
			month: '2-digit',
			day: '2-digit',
		},
	);
};

const rowRemove = (button, state, watchedState) => {
	const cityName = button.dataset.removeCity;
	const rowOfCity = button.closest(`[data-row-city="${cityName}"]`);
	
	const cities = [...state.cities];
	const cityIndexOf = cities.indexOf(cityName);
	
	cities.splice(cityIndexOf, 1);
	watchedState.cities = cities;
	rowOfCity.remove();
};

const renderTableHeader = (state, elements, config) => {
	const headerWrapper = elements.table.header;
	const emptyArray = new Array(config.days).fill(0);
	
	const cell = (date) => ` <div class="table__cell">
                      			<span class="text text--size-x text--weight-7 text--size-s">${date}</span>
                  			  </div>`;
	const cells = emptyArray.map((item, index) => {
		return cell(getDate(index));
	}).join('');
	
	const row = `<div class="table__row table__header-row">
								  <div class="table__cell">
								      <span class="text text--size-x text--weight-7">City</span>
								  </div>
								  ${cells}
								</div>`;
	
	headerWrapper.innerHTML = '';
	headerWrapper.insertAdjacentHTML('afterbegin', row);
};

const renderTableBody = (state, watchedState, elements) => {
	
	elements.table.body.innerHTML = '';
	
	const cell = (data, ico = '', textCls='text--size-x') => {
		const tableCell = document.createElement('div');
		tableCell.classList.add('table__cell');
		
		const tempText = document.createElement('span');
		tempText.classList.add('text', textCls);
		tempText.innerText = data;
		
		tableCell.append(tempText);
		
		if (ico !== '') {
			const icoWeather = document.createElement('img');
			icoWeather.classList.add('img', 'table__img');
			icoWeather.src = ico;
			tableCell.append(icoWeather);
		}
		
		return tableCell;
	};
	
	// ROWS
	const rows = state.weather.map((item) => {
		const row = document.createElement('div');
		row.classList.add('table__row');
		row.dataset.rowCity = item.name.toLowerCase();
		
		const cellName = cell(item.name);
		
		const cells = item.data.map((dayWeather) => {
			const icoSrc = `https://openweathermap.org/img/wn/${dayWeather.ico}.png`;
			const temp = `${dayWeather.temp.toFixed(1)}°C`;
			return cell(temp, icoSrc, 'text--size-s');
		});
		
		// DELETE BUTTON
		const button = document.createElement('button');
		button.dataset.removeCity = item.name.toLowerCase();
		button.classList.add('table__row-remove');
		button.innerHTML = '&times;';
		button.addEventListener('click', () => rowRemove(button, state, watchedState));
		
		row.append(cellName, ...cells, button);
		
		return row;
	})
		.map((item) => elements.table.body.append(item));
};

const renderTable = (state, watchedState, elements, config) => {
	
	// +++ 1 - сформировать шапку таблицы с датами (8 дней)
	// +++ 2 - получить данные о погоде из городов в стейте
	// +++ 3 - вывести в таблицы данные погоды
	// +++ 4 - добавить кнопку удаления строки
	
	if (!state.ui.tableHeader) {
		renderTableHeader(state, elements, config, );
	}
	
	renderTableBody(state, watchedState, elements, config);
};

const render = (state, watchedState, elements, config) => {
	renderTable(state, watchedState, elements, config);
};

export default () => {
	const elements = {
		searchList: document['form-search'],
		table: {
			header: document.querySelector('#table-header'),
			body: document.querySelector('#table-body'),
		},
	};
	
	const config = {
		interval: 5,
		pause: 5 * 60,
		days: 9,
		api: {
			url: 'https://api.openweathermap.org/data/2.5/onecall?',
			appid: `appid=${process.env.SECRET_KEY}`,
			exclude: '&exclude=minutely,hourly',
			units: '&units=metric',
		},
	};
	
	const state = {
		cities: ['moscow', 'saint petersburg'],
		lastUpdate: null,
		ui: {
			tableHeader: 0,
		},
		weather: [],
	};
	
	const watchedState = onChange(state, (path, value, prev) => {

		updateDataOfCities(state, config)
			.then(() => {
				render(state, watchedState, elements, config);

				state.ui.tableHeader = 1;
				state.weather = [];
			}
		);
	});
	
	watchedState.lastUpdate = Date.now();
};
