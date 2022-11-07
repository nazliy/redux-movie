import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataMovie } from '../actions/MovieSlice'
import Card from '../components/Card'
import Paging from '../components/Paging'

const Home = () => {
    const [page, setPage] = useState(1)
    const data = useSelector(state => state.movie.movie)
    const isLoading = useSelector(state => state.movie.loading)
    console.log(isLoading)
    const dispatch = useDispatch()  
    

useEffect(()=> {
    dispatch(fetchDataMovie(page))
    console.log(page)
},[page])

  return (
   <main>
    <div className='card-list'>       
        { 
             !isLoading ?
             (
              data &&  data.map(movie => {
                    return(
                        <Card movie={movie} key={movie} />
                    )
                })
             )  :
             <h2>Yükleniyor</h2>           
        }  
    </div> 
    <Paging page={page} setPage={setPage}/>
   </main>
  )
}

export default Home