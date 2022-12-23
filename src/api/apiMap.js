const api = (config) => ({
  getPost: (payload) => config("get", "api/path"),
});

export default api;
