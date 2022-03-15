import { useEffect } from "react"
import React from 'react'
import { useDispatch } from "react-redux"
import { fecthShow } from "../redux/actions/actions"
export const ShowListing = () => {
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fecthShow())

    }, [])

    return (
        <div>ShowListing</div>
    )
}
