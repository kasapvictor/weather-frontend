import axios from 'axios';

const apiDataOfCity = async (url) => {
  try {
    const { data } = await axios.get(url);
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

export default apiDataOfCity;
