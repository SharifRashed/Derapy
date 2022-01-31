import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const SuggestionForm = () => {
    const [suggestion, updateSuggestion] = useState({
        title: "",
        description: ""
    });

    const history = useHistory()

    const submitSuggestion = (event) => {
        event.preventDefault()

        const newSuggestion = {
            title: suggestion.title,
            userId: parseInt(localStorage.getItem("derapy_customer")),
            description: suggestion.description,
            dateCompleted: ""
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSuggestion)
        }

        return fetch("http://localhost:8088/suggestions", fetchOption)
            .then(() => {
                history.push("/suggestions")

            })
    }




    return (
        <form className="suggestionForm">
            <h2 className="suggestionForm_title">New Suggestion</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Title of your suggestion"
                        onChange={
                            (evt) => {
                                const copy = { ...suggestion }
                                copy.title = evt.target.value
                                updateSuggestion(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of your suggestion"
                        onChange={
                            (evt) => {
                                const copy = { ...suggestion }
                                copy.description = evt.target.value
                                updateSuggestion(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitSuggestion}>
                Submit Suggestion
            </button>
        </form>
    )
}
