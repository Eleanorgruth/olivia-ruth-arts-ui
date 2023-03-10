const getData = (url) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      } else {
        return response.json()
      }
    })
}

export default getData 