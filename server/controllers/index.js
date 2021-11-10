const axios = require('axios').default;
// const { githubSearch } = require('../models');

exports.search = async (qp) => {
  // add check for redis store to redis
  const response = await axios.get(`https://api.github.com/search/${qp.type}?q=${qp.q}`).then((res) => res.data);
  return response;
};

// exports.clearCache = () => {
//   // clear redis.
// }
