import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {fetchDataMovieDetail} from '../actions/MovieDetailSlice'

const Detail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const movie = useSelector( (state) => state.detail.movieDetail)
console.log(movie)
 
useEffect(()=> {
  dispatch( fetchDataMovieDetail(id))
},[])

  return (
    
    <main>
      <div className='row'>
        <div className='col-md-12'>
          <p style={{fontWeight:600, fontSize:18, cursor:'pointer'}} onClick={()=> navigate("/")}>
            <i className='fa fa-backward'></i>
          </p>
        </div>
      </div>
      {
        movie && movie.map(item => {
          return(
            <div className='row'>
              <div className='col-md-4'>
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt={item.title}/>
              </div>
              <div className='col-md-8'>
                <h2>{item.title}</h2>
                <pre>{item.release_date}</pre>
                <p>{item.overview}</p>
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default Detail