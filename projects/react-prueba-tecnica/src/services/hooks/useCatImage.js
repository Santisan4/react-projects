import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const firstWordFromFact = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWordFromFact}?json=true`)
      .then(response => response.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
