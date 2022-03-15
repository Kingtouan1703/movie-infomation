import React, { useEffect, useState } from 'react'
import './SearchBar.css'
import { FcSearch } from '@react-icons/all-files/fc/FcSearch'
import { Link } from 'react-router-dom'
export const SearchBar = () => {
    const [input, setInput] = useState('')
    useEffect(() => {
        return () => {
            setInput('')
        }
    }, [])
    return (
        <>
            <div className="search-box">
                <button className="btn-search"><Link to={`/search/${input}`}> <FcSearch /></Link></button>
                <input type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="input-search"
                    placeholder="Type to Search..." />
            </div>
        </>
    )
}
