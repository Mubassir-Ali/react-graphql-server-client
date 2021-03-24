import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBookQuery);
  let bList = [];
  if (loading === false) {
    const { books } = data;
    bList=books
  }

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
       
          {bList.map(({ name, id },index) => (
            <p key={index}>{name}</p>
          ))}
      
      )}
    </div>
  );
};
export default BookList;
