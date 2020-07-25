const saveToken = token => {
  localStorage.setItem('_token', token);
};

const getToken = () => {
  return localStorage.getItem('_token');
};

module.exports = { saveToken, getToken };
