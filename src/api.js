import axios from "axios";

const ncGamesInstance = axios.create({ baseURL: "https://games-database-ugec.onrender.com/api" })

export const getReviews = () => {
    return ncGamesInstance.get('/reviews').then(({data}) => {
        return data.reviews
    })
}