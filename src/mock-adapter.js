var MockAdapter = require('axios-mock-adapter')

const mockAdapter = (axios, delayResponse) => {
  var mock = new MockAdapter(axios, { delayResponse: delayResponse || 800 })
  return initialize(mock)
}

const initialize = mock => {
  mock.onGet('/users').reply(200, usersListBody)
  mock.onGet('/users/1').reply(200, sessionUser)
  mock.onAny().passThrough()
  return mock
}
export default mockAdapter

const sessionUser = {
  id: 1,
  firstName: 'jon',
  middleName: 'mid',
  lastName: 'smith',
  title: 'dr',
  phone: '1234567890',
  extension: '1000',
  bio: 'lorem ipsum dolor',
  email: 'jon.smith@example.com',
  avatar: 'https://via.placeholder.com/100x100.png?text=avatar'
}

const usersListBody =
{
  records: [
    {
      id: 1,
      firstName: 'Bob',
      middleName: 'Tin',
      lastName: 'sleay',
      email: 'bobP@example.com',
      title: 'Dr.',
      bio: 'lorem ipsum',
      phone: '1234567890',
      createdAt: '2019-02-08T18:12:07.9866667',
      updatedAt: '2019-02-08T18:12:07.9866667'
    },
    {
      id: 3,
      firstName: 'nSFyr',
      middleName: 'npSFC',
      lastName: 'lGgtn',
      email: 'WqBYr@example.com',
      title: 'qCEIv',
      bio: 'PYXBavUPDlpsVvzUsEDgRzlNwDksQvbpdoQUQVQFEcnQPPZLvEeYJbAQnJEWKcyHJzOhefEWoxboLUyhdZwLQCgCoAhGQtucegGP',
      phone: '20556324',
      createdAt: '2019-02-09T00:35:04.2966667',
      updatedAt: '2019-02-09T00:35:04.2966667'
    },
    {
      id: 5,
      firstName: 'tYPLv',
      middleName: 'eAXVp',
      lastName: 'PvKil',
      email: 'niDDg@example.com',
      title: 'ATxhI',
      bio: 'mfupCowmdwWqDRaYmLFywxabhDigdGNpVzXCqxfPGuXXaqEvXydwuvzpFTHzFQIWihUEuYiofqrBaDArymIfdRuZzhxXqgJplAos',
      phone: '30542190',
      createdAt: '2019-02-09T00:45:45.1833333',
      updatedAt: '2019-02-09T00:45:45.1833333'
    }
  ],
  page: {
    page: 1,
    perPage: 1000,
    totalRecords: 3,
    sortBy: 'id',
    sortDirection: 'asc'
  }
}
