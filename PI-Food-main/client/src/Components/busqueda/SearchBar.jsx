import { useDispatch } from "react-redux";
import { getRecipeName } from '../../Redux/actions';
import { useState } from "react";

export default function SearchBar(props) {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        dispatch(getRecipeName(searchValue));
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            dispatch(getRecipeName(searchValue));
        }
    };
    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            dispatch(getRecipeName(searchValue))
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
                onKeyUp={handleEnter}
            />
            <button onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};