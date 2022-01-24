import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const KEY_API = '24514274-52e0231f5d7d433d8bfaeea6c';

export const Api = async (filter, page) => {
  const response = await axios.get(
    `/api/?q=${filter}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
