import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'

const Favorite = () => {
 const data = useSelector(state => state.movie.favoriteData)
  console.log(data)
  console.log(!data.length)
  return (
    <main>
    {!data.length && <h4>Lütfen, favori filmlerinizi ekleyiniz..</h4> }
      <div className='card-list'>
        { 
          data.map(movie => {
            return(
              <Card movie={movie} key={movie}/>
            )
          })
        }
    </div>
    </main>
  )
}

export default Favorite