import { useEffect, useState } from 'react'
import { getRandomFact } from '../facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFactCat = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  // para recuperar la cita al cargar la pagina
  useEffect(refreshFactCat, [])

  return { fact, refreshFactCat }
}
