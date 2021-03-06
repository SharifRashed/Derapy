import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import "./suggestionForm.css";
export const SuggestionForm = () => {
    const [suggestion, updateSuggestion] = useState({
        title: "",
        description: ""
    });

    const history = useHistory()

    const submitSuggestion = (event) => {
        event.preventDefault()

        //function that holds an object of properties for a new suggestion
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
                //pushes to the url bar ( in this case, suggestion page)
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
            <button className="btn-primary" onClick={submitSuggestion}>
                Submit
            </button>
        </form>
    )
}
