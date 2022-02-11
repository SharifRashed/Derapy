import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from "./homepage/Homepage.js"
import { Deryk } from "./meetDeryk/Deryk.js"
import { SuggestionForm } from "./suggestion/suggestionForm.js"
import { SuggestionList } from "./suggestion/suggestionList.js"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path={["/homepage", "/"]}>
                <Homepage />
            </Route>

            <Route exact path="/suggestions">
                <SuggestionList />
            </Route>

            <Route exact path="/suggestions/create">
                <SuggestionForm />
            </Route>

            <Route exact path="/meetDeryk">
                <Deryk />
            </Route>

        </>
    )
}