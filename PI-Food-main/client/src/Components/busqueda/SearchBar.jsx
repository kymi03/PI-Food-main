import { useDispatch } from "react-redux";
import * as actions from '../../Redux/actions';
import { useState } from "react";

export default function SearchBar(props) {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        dispatch(actions.getRecipeName(searchValue));
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            dispatch(actions.getRecipeName(searchValue));
        }
    };

    return (
        <div>
            <input
                type='search'
                placeholder='Search recipe by name'
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};