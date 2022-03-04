import List from "list.js";
import cityList from "./city.list.json";

// https://listjs.com/examples/existing-list-add/
// https://listjs.com/api/

const options = {
  valueNames: [{ data: ["city-id"] }, "city"],
  item: '<li class="list__item"><p class="city list__item-text"></p></li>',
};

const buildValues = (state) => {
  const { cities } = state;
  return cityList.reduce((prev, curr) => {
    const isInclude = cities.includes(curr.id);

    if (!isInclude) {
      const city = { "city-id": curr.id, city: curr.name };
      return [...prev, city];
    }

    return prev;
  }, []);
};

const renderSearch = (state, watchedState, elements, config) => {
  const list = elements.formSearch.querySelector(".list");
  list.innerHTML = "";

  const values = buildValues(state);
  const searchList = new List("hacker-list", options, values);
};

export default renderSearch;
