import { reduxSearchMovie } from "../../service/get-data-movie-search"
import { setSearch } from "../reducers/movie/authSearch"

const actionSearch = ( query ) => async (dispatch) => {
    return reduxSearchMovie( query ).then((result) => {
        dispatch(setSearch(result.data.data))
        console.log(result)
    })
    .catch((err)=>{
        console.error(err, "error")
    })
}

export default actionSearch
