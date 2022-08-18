
import { Grid } from '@nextui-org/react'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';


const HomePage = ({ pokemons }) => {

  return (
    <Layout title={'Listado de Pokemons'}>

      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map(pokemon => (
              <PokemonCard pokemon={pokemon} key={pokemon.id} />
            )
          )
        }
      </Grid.Container>

    </Layout>
  )
}


export const getStaticProps = async (ctx) => {

  const { data } = await pokeApi.get('/pokemon?limit=151')

  const pokemons = data.results.map((pokemon, index) => {
    return {
      id: index + 1,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
      url: `https://pokeapi.co/api/v2/pokemon/${index + 1}/`
    }
  })

  return {
    props: {
      pokemons
    }
  }
}


export default HomePage