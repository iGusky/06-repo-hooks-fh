import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search);
    
    const [ values, handleChange] = useForm({
        searchText: q
    });
    
    const { searchText } = values;
    
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ]) ;
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <h4>Search form</h4>
                    <form onSubmit = { handleSearch }>
                        <input 
                        type = "text" 
                        className = "form-control"
                        name = "searchText" 
                        value = { searchText }
                        placeholder = "Find your hero"
                        onChange = { handleChange }
                        autoComplete = "off"
                        />

                        <button
                            type="submit"
                            className="btn btn-block m-1 btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-md-8">
                    <h4>Results</h4>
                    <hr/>
                    {
                        heroesFiltered.map( hero =>( <HeroCard 
                            key = { hero.id }
                            { ...hero } /> ))
                    }
                </div>
            </div>
        </div>
    )
}
