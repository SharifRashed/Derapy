import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"



export const SuggestionList = () => {
    const history = useHistory()
    const [suggestions, modifySuggestions] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/suggestions?_expand=user")
                .then(response => response.json())
                .then((data) => {
                    modifySuggestions(data)
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
                        return <p key={`/suggestions/${suggestion.id}`}>{suggestion.description} submitted by {suggestion.user.name}, {suggestion.user.email} </p>

                    }
                )
            }

        </>
    )
}