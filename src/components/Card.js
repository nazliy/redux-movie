import React, { useState } from 'react'
import  {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { favoriteAdd, removeFavorite } from '../actions/MovieSlice'

const Card = ({movie}) => {
    const {id, poster_path, title } = movie
    const dispatch = useDispatch()

    const data = useSelector(state => state.movie.favoriteData)
    const [status, setSatus] = useState(()=> {
      const favoriteStatus = data.find( item => item.id === movie.id)
      return !!favoriteStatus
    })


   const handleFavorite = (movie) => {
      setSatus(!status)
      if(!status){
        dispatch(favoriteAdd(movie))
      }
      if(status){
        dispatch(removeFavorite(movie))
      }      
   }

  return (
    <div className="card" key={id} >
        <div className='favorite-icon' onClick={() => handleFavorite(movie)}>
        { status ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
        </div>
        <Link to={`/movie/${id}`} >
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="card-img-top" alt={title}/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
          </div>
        </Link>
    </div>
   
  )
}

export default Card