import React from "react"
import { useHistory } from "react-router-dom"

export const Suggestion = () => {
    const history = useHistory()

    return (
        <>
            <h2> Suggestion Details </h2>
            <section className="ticket">
                <h3 className="ticket_description"></h3>
                <div className="ticket_user"></div>
            </section>
            < div >
                <button onClick={() => history.push("/suggestions/create")}>Create Suggestion</button>
            </div >
        </>
    )
}