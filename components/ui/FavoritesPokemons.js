import { Grid } from '@nextui-org/react'
import { FavoriteCardPokemon } from '../pokemon'

export const FavoritesPokemons = ({ pokemons }) => {
    return (

        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                pokemons.map(id => (<FavoriteCardPokemon id={id} key={id} />))
            }
        </Grid.Container>
    )
}
