const axios = require('axios');
let newsdata = {};

const getnews = async () => {
  try {
    const response = await axios.get('https://api.publicapis.org/entries');
    console.log('News data fetched successfully');
    newsdata = response.data;
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; 
  }
};
 
module.exports = {getnews, newsdata};