import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (query, page = 1, parPage = 12) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=32987390-a379c2f5799a256efb91f2c80&image_type=photo&orientation=horizontal&per_page=${parPage}`
  );
  return response.data;
};
