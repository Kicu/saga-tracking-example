const baseUrl = 'https://swapi.co/api';

function getId({ url }) {
  const split = url.split('/');
  return split[split.length - 2];
}

async function fetchFromApi(url) {
  return fetch(`${baseUrl}${url}`).then(response => response.json());
}

function getPeople(id) {
  if (id) {
    return fetchFromApi(`/people/${id}`).then(person =>
      Object.assign(person, { id: getId(person) })
    );
  }

  return fetchFromApi('/people').then(peopleData =>
    peopleData.results.map(p => Object.assign(p, { id: getId(p) }))
  );
}

export { getPeople };
