import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
	return (
		<div className='col col-sm-4'>
            <div className="md-form mt-0">
            <i class="material-icons mdc-button__icon"></i>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type movie to search...'
                aria-label="Search"
			></input>
		</div>
        </div>
	);
};

export default SearchBar;