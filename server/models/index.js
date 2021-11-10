const axios = require('axios').default;

exports.githubSearch = async (qp) => axios.get(`https://api.github.com/search/${qp.type}?q=${qp.q}`).then((res) => res.data);
