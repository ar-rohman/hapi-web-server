const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (response, h) => {
      return 'Homepage';
    },
  },
  {
    method: '*',
    path: '/',
    handler: (response, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: (response, h) => {
      return 'About page';
    },
  },
  {
    method: '*',
    path: '/about',
    handler: (response, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (response, h) => {
      return 'Halaman tidak ditemukan';
    },
  },
];

module.exports = routes;
