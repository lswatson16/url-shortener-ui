export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postURL = (newURL) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newURL)
  })
  .then(response => response.json())
  .then(data => {
    console.log('POST', data)
    return data
  })
}
