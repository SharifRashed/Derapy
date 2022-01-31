import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from "./homepage/Homepage.js"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/homepage">
                <Homepage />
            </Route>
        </>
    )
}