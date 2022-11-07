import React from 'react'

const Paging = ({page,setPage}) => {
  return (
    <footer>
        <div className='paging'>
            <button className='btn btn-primary'
             onClick={()=>  setPage( (prevPage) => prevPage - 1)} 
             disabled={page === 1 ? true : false}
             >Geri</button>
            <p>{page}</p>
        <button className='btn btn-primary' onClick={()=>  setPage( (prevPage) => prevPage + 1)}>İleri</button>
    </div> 
    </footer>
  )
}

export default Paging