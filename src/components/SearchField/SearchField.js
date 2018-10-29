import React from 'react';
import './SearchField.css';

const SearchField = ({searchChange}) => {
	return <div>
			   <input 
			   		className="search-field-box"
			   		type="search" 
			   		placeHolder="Search Robots"
			   		onChange={searchChange} />
	       </div>
}
export default SearchField;