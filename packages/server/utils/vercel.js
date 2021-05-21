module.exports = {
  delete: makeMiddleware('DELETE'),
  get: makeMiddleware('GET'),
  patch: makeMiddleware('PATCH'),
  post: makeMiddleware('POST'),
  put: makeMiddleware('PUT'),
  use: makeMiddleware(),
};

function makeMiddleware(httpMethod) {
  return (fn) => (req, res) => {
    if (httpMethod && req.method !== httpMethod) {
      return res.status(405).send({ message: 'Invalid HTTP method.' });
    }
    return fn(req, res).catch((error) => {
      console.error(error);
      return res.status(error.status || 500).send({ error });
    });
  };
}
