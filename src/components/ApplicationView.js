import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from "./homepage/Homepage.js"
import { SuggestionForm } from "./suggestion/suggestionForm.js"
import { Suggestion } from "./suggestion/suggestion.js"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/homepage">
                <Homepage />
            </Route>

            <Route exact path="/suggestions">
                <Suggestion />
            </Route>

            <Route path="/suggestions/create">
                <SuggestionForm />
            </Route>
        </>
    )
}