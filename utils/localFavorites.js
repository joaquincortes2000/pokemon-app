
const toggleFavorite = (id) => {

    let favorites = JSON.parse(localStorage.getItem('favorites')  || '[]')

    if(favorites.includes(id)){
        favorites = favorites.filter( pokeId => pokeId !== id)
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))

}

const existInFavorites = (id) => {

    if(typeof window === 'undefined') return false

    const favorites = JSON.parse(localStorage.getItem('favorites')  || '[]') 

    return favorites.includes(id)
}

const pokemons = () => {
    return JSON.parse(localStorage.getItem('favorites')  || '[]') 
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    toggleFavorite,
    existInFavorites,
    pokemons
}