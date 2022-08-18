
import { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { FavoritesPokemons, NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons)
  }, [])


  return (
    <Layout title={'Pagina Favoritos'}>

      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : (<FavoritesPokemons pokemons={favoritePokemons} />)
      }


    </Layout>
  )
}

export default FavoritesPage