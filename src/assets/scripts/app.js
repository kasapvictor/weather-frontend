import onChange from 'on-change';
import cityList from './city.list.json';
import renderSearch from './renderSearch';
import renderTable from './renderTable';
import apiDataOfCity from './api';

console.log(cityList);

const buildUrl = (config, lat, lon) => {
  const baseUtl = config.api.url;
  const appId = config.api.appid;
  const { exclude } = config.api;
  const { units } = config.api;
  return `${baseUtl}${appId}${exclude}${units}${lat}${lon}`;
};

const updateDataOfCities = async (state, config) => {
  const cities = state.cities.sort();
  
  return new Promise(async (resolve) => {
    for (const city of cities) {
      const findCity = cityList.find((item) => item.id === city);
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
        return { temp, ico };
      });
      
      state.weather = [
        ...state.weather,
        {
          name: findCity.name,
          data: [{ ...current }, ...daily],
        }];
    }
  
    // SORT CITIES BY NAME
    state.weather.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      
      if (a.name < b.name) {
        return -1;
      }
      
      return 0;
    });
    
    resolve();
  });
};

const render = (state, watchedState, elements, config) => {
  renderTable(state, watchedState, elements, config);
  renderSearch(state, watchedState, elements, config);
};

export default () => {
  const elements = {
    formSearch: document['form-search'],
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
    cities: [524894, 498817],
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
      });
  });

  watchedState.lastUpdate = Date.now();
  
  // FORM SEARCH
  const formSearch = elements.formSearch;
  formSearch.addEventListener('submit', (e) => e.preventDefault());
  formSearch.addEventListener('click', (e) => {
    const el = e.target;
    const isCity = el.classList.contains('city');
    
    if (isCity) {
      const parent = el.closest("li[data-city-id]");
      const id = parent.dataset.cityId;

      watchedState.cities = [...watchedState.cities, Number(id)];
    }
  })
};
