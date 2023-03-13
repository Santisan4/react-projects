import './App.css'
import { useCatImage } from './services/hooks/useCatImage'
import { useCatFact } from './services/hooks/useCatFact'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const { fact, refreshFactCat } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFactCat()
  }

  return (
    <main>
      <h1> App de gatitos </h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first word from ${fact}`} />}
      <button onClick={handleClick}>Get new Fact</button>
    </main>
  )
}
