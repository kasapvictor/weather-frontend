<<<<<<< HEAD
const getDate = (numberOfDay = 0) => {
  // 26.02.22
  const today = new Date();
  const nextDay = new Date(today);
  const date = nextDay.setDate(nextDay.getDate() + numberOfDay); // 1645974081243
  const newDate = new Date(date);

  return newDate.toLocaleDateString("RU", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
};
=======
import getDate from './getDate';
>>>>>>> 916eff971efcba0ccc94326dd4fb2cd17710fc6b

const rowRemove = (button, state, watchedState) => {
  const watched = watchedState;
  const cityId = button.dataset.removeCity;
  const rowOfCity = button.closest(`[data-row-city="${cityId}"]`);

  const cities = [...state.cities];
  const cityIndexOf = cities.indexOf(Number(cityId));

  if (cityIndexOf >= 0) {
    cities.splice(cityIndexOf, 1);
    rowOfCity.remove();

    watched.cities = cities;
  }
};

const renderTableHeader = (state, elements, config) => {
  const headerWrapper = elements.table.header;
  const emptyArray = new Array(config.days).fill(0);

<<<<<<< HEAD
  const cell = (date) => ` <div class="table__cell">
  <span class="text text--size-x text--weight-7 text--size-s">${date}</span>
  </div>`;
  const cells = emptyArray.map((item, index) => cell(getDate(index))).join("");
=======
  const cell = (date) => `
    <div class="table__cell">
        <span class="text text--size-x text--weight-7 text--size-s">${date}</span>
    </div>`;
  const cells = emptyArray.map((item, index) => cell(getDate(index))).join('');
>>>>>>> 916eff971efcba0ccc94326dd4fb2cd17710fc6b

  const row = `
    <div class="table__row table__header-row">
        <div class="table__cell">
            <span class="text text--size-x text--weight-7">City</span>
        </div>
        ${cells}
    </div>`;

  headerWrapper.innerHTML = "";
  headerWrapper.insertAdjacentHTML("afterbegin", row);
};

const renderTableBody = (state, watchedState, elements) => {
  const tableBody = elements.table.body;
  tableBody.innerHTML = "";

  const cell = (data, ico = "", textCls = "text--size-x") => {
    const tableCell = document.createElement("div");
    tableCell.classList.add("table__cell");

    const tempText = document.createElement("span");
    tempText.classList.add("text", textCls);
    tempText.innerText = data;
    tableCell.append(tempText);

    if (ico !== "") {
      const icoWeather = document.createElement("img");
      icoWeather.classList.add("img", "table__img");
      icoWeather.src = ico;
      tableCell.append(icoWeather);
    }

    return tableCell;
  };

  // ROWS
  state.weather
    .map((item) => {
<<<<<<< HEAD
      const row = document.createElement("div");
      row.classList.add("table__row");
      row.dataset.rowCity = item.id;

      const cellName = cell(item.name);

      const cells = item.data.map((dayWeather) => {
        const icoSrc = `https://openweathermap.org/img/wn/${dayWeather.ico}.png`;
        const temp = `${dayWeather.temp.toFixed(1)}°C`;
        return cell(temp, icoSrc, "text--size-s");
      });

      // DELETE BUTTON
      const button = document.createElement("button");
      button.dataset.removeCity = item.id;
      button.classList.add("table__row-remove");
      button.innerHTML = "&times;";
      button.addEventListener("click", () =>
        rowRemove(button, state, watchedState)
      );
=======
      const row = document.createElement('div');
      row.classList.add('table__row');
      row.dataset.rowCity = item.id;

      const cellName = cell(item.name);
      const cells = item.data.map((dayWeather) => {
        const icoSrc = `https://openweathermap.org/img/wn/${dayWeather.ico}.png`;
        const temp = `${dayWeather.temp.toFixed(1)}°C`;
        return cell(temp, icoSrc, 'text--size-s');
      });

      // DELETE BUTTON
      const button = document.createElement('button');
      button.dataset.removeCity = item.id;
      button.classList.add('table__row-remove');
      button.innerHTML = '&times;';
      button.addEventListener('click', () => rowRemove(button, state, watchedState));
>>>>>>> 916eff971efcba0ccc94326dd4fb2cd17710fc6b

      row.append(cellName, ...cells, button);

      return row;
    })
    .map((item) => tableBody.append(item));
};

const renderTable = (state, watchedState, elements, config) => {
  if (!state.ui.tableHeader) {
    renderTableHeader(state, elements, config);
  }

  renderTableBody(state, watchedState, elements, config);
};

export default renderTable;
