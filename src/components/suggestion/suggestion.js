import React, { useState } from "react"
import { FaHeart } from "react-icons/fa"
import { FaHeartBroken } from "react-icons/fa";
import { useHistory } from "react-router-dom";


export const Suggestion = ({ suggestion }) => {
    const [liked, setLiked] = useState(false)


    const history = useHistory()

    const submitLike = () => {

        //the properties and values of a new like being returned:
        const newLike = {
            suggestionId: suggestion.id,
            userId: parseInt(localStorage.getItem("derapy_customer"))
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLike)
        }

        //fetch option posts the returning data of the new like function then into a new object to "/suggestions" by the history.push method
        return fetch("http://localhost:8088/suggestionLikes", fetchOption)
            .then(() => {
                history.push("/suggestions")
            })
    }

    const toggle = (like) => {
        let localLiked = like
        localLiked = !localLiked
        setLiked({ like: localLiked })
        submitLike()
    };


    return (
        <>

            <div>
                <p key={`/ suggestions / ${suggestion.id}`}>{suggestion.description}
                </p>
                <p>
                    submitted by {suggestion.user.name} , {suggestion.user.email}
                </p>
                <div className="user_delete_display">
                    {/* {userDeleteSuggestion(suggestion)} */}
                </div>
            </div>
            <div className="container">
                <center>

                    <p>Click on the Like Button</p>

                    <div
                        className="container"
                        style={{ border: "1px solid black", width: "15%" }}
                        onClick={() => toggle()}
                    >
                        {
                            liked === false ? (
                                <FaHeartBroken />
                            ) : (
                                <FaHeart />
                            )
                        }
                    </div>
                </center>
            </div>
        </>
    )
}