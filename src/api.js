import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
       headers: {
         Authorization: 'Client-ID 7wGp1Ra79BxaaXAH1bBsya8HzPpsW1BdKyDJthwkw8M'
       }, params: {
         query: term
       }
     });
     console.log(response.data.results);
     return response.data.results;
   };

export default searchImages;