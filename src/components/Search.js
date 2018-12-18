import React from 'react';

const Search = ({fn})=> {
    return(<div className = "pa2">
       <input className = "pa3 ba b--green bg-lightest-blue" onChange = {fn}
         type = "search" placeholder = "search for robofriends" />
    </div>)

}

export default Search;