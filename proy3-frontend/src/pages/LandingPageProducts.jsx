import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Search from '../components/Search'
import Products from './Products'
import { useDebounce } from "../hooks/useDebounce";

const LandingPageProducts = () => {
    const [query] = useSearchParams();
    const search = query.get("search");


    const debouncedSearch = useDebounce(search, 300);
    return (
        <>
            <Search />
            <Products key={debouncedSearch} search={debouncedSearch} />
        </>
    )
}

export default LandingPageProducts