import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from "./homepage/Homepage.js"
import { SuggestionForm } from "./suggestion/suggestionForm.js"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/homepage">
                <Homepage />
            </Route>

            <Route path="/suggestion/create">
                <SuggestionForm />
            </Route>
        </>
    )
}