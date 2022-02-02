import React, { useState } from "react"
import { FaHeart } from "react-icons/fa"
import { FaHeartBroken } from "react-icons/fa";


export const Suggestion = ({ suggestion }) => {
    const [liked, setLiked] = useState(false)


    const toggle = (like) => {
        let localLiked = like
        localLiked = !localLiked
        setLiked({ like: localLiked })
    };


    return (
        <>

            <div>
                <p key={`/ suggestions / ${suggestion.id}`}>{suggestion.description} submitted by {suggestion.user.name}, {suggestion.user.email}
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
                                <FaHeart />
                            ) : (
                                <FaHeartBroken />
                            )
                        }
                    </div>
                </center>
            </div>
        </>
    )
}