import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Suggestion } from "./suggestion.js"
import "./suggestionList.css"


export const SuggestionList = () => {
    const history = useHistory()
    //use State has a variable that holds state and a setter function
    const [suggestions, modifySuggestions] = useState([])



    const deleteSuggestion = (id) => {
        //fetches the id for a suggestion post
        fetch(`http://localhost:8088/suggestions/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("derapy_token")}`
            }
        }
        )
            //fetches the users for each suggestion in the database
            .then(() => fetch(`http://localhost:8088/suggestions?_expand=user`))
            // .then is the promise a fetch call returns
            .then(response => response.json())
            .then((data) => {
                //use state setter function
                return modifySuggestions(data)
            })

    }

    //grabs all the data of suggestions and users
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
                <button className="btn-primary" onClick={() => history.push("/suggestions/create")}>Create Suggestion</button>
            </div >

            {
                suggestions.map(
                    (suggestion) => {
                        return (
                            <Suggestion suggestion={suggestion} key={suggestion.id}
                                deleteSuggestion={deleteSuggestion} />
                        )
                    }
                )
            }
        </>
    )
}

