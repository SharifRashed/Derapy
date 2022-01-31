import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
// import "./Suggestion.css"



export const SuggestionList = () => {
    //whatever this export function returns will be the html that gets generated browser
    const history = useHistory()
    const [suggestions, modifySuggestions] = useState([])
    const [users, modifyUsers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/suggestions")
                .then(response => response.json())
                .then((data) => {
                    modifySuggestions(data)
                }
                )
        },
        []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/users")
                .then(response => response.json())
                .then((data) => {
                    modifyUsers(data)
                }
                )
        },
        []

    )
    return (
        <>
            < div >
                <button onClick={() => history.push("/suggestions/create")}>Create Suggestion</button>
            </div >
            {
                suggestions.map(
                    (suggestion) => {
                        return <p key={`/suggestions/${suggestion.id}`}>{suggestion.description} submitted by {users.name}, {users.email} </p>

                    }
                )
            }

        </>
    )
}