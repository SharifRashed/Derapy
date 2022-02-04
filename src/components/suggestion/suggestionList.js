import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suggestion } from "./suggestion.js"


export const SuggestionList = () => {
    const history = useHistory()
    const [suggestions, modifySuggestions] = useState([])



    const deleteSuggestion = (id) => {
        fetch(`http://localhost:8088/suggestions/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("derapy_token")}`
            }
        }
        )
            .then(fetch(`http://localhost:8088/suggestions`))
            .then(response => response.json())
            .then((data => {
                return modifySuggestions(data)
            }))

    }

    const userDeleteSuggestion = (suggestion) => {
        if (suggestion.userId === parseInt(localStorage.getItem("derapy_customer"))) {

            return <button onClick={() => {
                deleteSuggestion(suggestion.id)
            }}>Delete</button>

        } else {
            return ""
        }

    }


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
                        return (
                            <Suggestion suggestion={suggestion}
                                userDeleteSuggestion={userDeleteSuggestion} />
                        )
                    }
                )
            }
        </>
    )
}

