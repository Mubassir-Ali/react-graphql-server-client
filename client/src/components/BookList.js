import React from 'react'
import {gql,useQuery} from '@apollo/client'

const getBookQuery=gql`
{
    books{
        name
        id
    }
}
`



const BookList = () => {
   const {loading, error, data} = useQuery(getBookQuery)
   console.log(data);
    return (
        <div>
        <ul id="book-list">
            <li>Book Name</li>
        </ul>
      
            
        </div>
    )
}

export default BookList