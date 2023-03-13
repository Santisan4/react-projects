const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(response => response.json())
    .then(response => {
      // TODO: Handle error if !res.ok
      const { fact } = response
      return fact
    })
}
