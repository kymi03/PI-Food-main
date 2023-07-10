import { useDispatch } from "react-redux";
import { getRecipeName, setCurrentPage } from '../../Redux/actions';
import { useState } from "react";

export default function SearchBar(props) {
    const dispatch = useDispatch();
    const regex = /^[a-zA-Z0-9\s]*$/;
    const [searchValue, setSearchValue] = useState('');
    const [errors, setErrors] = useState(false);

    const handleSearch = () => {
        dispatch(getRecipeName(searchValue));
        dispatch(setCurrentPage(1))
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            dispatch(getRecipeName(searchValue));
            dispatch(setCurrentPage(1))
        }
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value)

        if(regex.test(searchValue)) {
            setErrors(true)
        }else{
            setErrors(false)

        }

    };
   



    return (
        <div>
            <input
                type='search'
                placeholder='Search recipe by name'
                value={searchValue}
                onChange={handleChange}
                onKeyDown={regex.test(searchValue) ? handleKeyDown: null}
            />
            <button onClick={handleSearch}
                disabled={
                    !regex.test(searchValue) ? true:false
                }>
                Search
            </button>
        </div>
    );
};