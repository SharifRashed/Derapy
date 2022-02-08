import React, { useState, useEffect } from "react"
import { FaHeart } from "react-icons/fa"
import { FaHeartBroken } from "react-icons/fa";
import { useHistory } from "react-router-dom";


export const Suggestion = ({ suggestion, deleteSuggestion }) => {
    // use state has a variable and a setter function that holds state
    const [liked, setLiked] = useState(false)
    const [suggestionLike, setSuggestionLike] = useState({})

    //allows us to manipulate the url
    const history = useHistory()

    const submitLike = () => {

        //the properties and values of a new like being returned:
        const newLike = {
            suggestionId: suggestion.id,
            userId: parseInt(localStorage.getItem("derapy_customer"))
        }
        //fetch option posts the returning data of the new like function then into a new object to "/suggestions" by the history.push method
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //pass in new like function as the arguement
            body: JSON.stringify(newLike)
        }

        return fetch("http://localhost:8088/suggestionLikes", fetchOption)
            .then(response => response.json())
            .then((data) => {
                setSuggestionLike(data)
                history.push("/suggestions")
            })
    }

    //Use Effect asks as an "event listner" for state
    //A use Effect hook that fetches the suggestion likes data and the current user 
    useEffect(
        () => {
            // returns an array
            fetch(`http://localhost:8088/suggestionLikes?userId=${localStorage.getItem("derapy_customer")}&suggestionId=${suggestion.id}`)
                .then(response => response.json())
                .then((data) => {
                    console.log(data, `likes for ${suggestion.id}`)
                    //conditonal that specifies if the index of the array is more than 0( 1 or more objects in the array)
                    if (data.length > 0) {
                        setLiked(true);
                        setSuggestionLike(data[0])
                    }
                }
                )
        },
        []
    )

    //toggle function will allow a user to toggle the heart icon depending on the ternary conditional in the return statement
    const toggle = () => {
        let localLiked = liked
        localLiked = !localLiked
        if (liked) {
            fetch(`http://localhost:8088/suggestionLikes/${suggestionLike.id}`, {
                method: "DELETE"
            }).then(() => setSuggestionLike({}))
        }
        else {
            submitLike()
        }
        setLiked(localLiked)
    }

    return (
        <>
            <div>
                <p key={`/ suggestions / ${suggestion.id}`}>{suggestion.description}
                </p>
                <p>
                    submitted by {suggestion.user.name} , {suggestion.user.email}
                </p>
                <div className="user_delete_display">
                    {suggestion.userId === parseInt(localStorage.getItem("derapy_customer")) ?

                        <button onClick={() => {
                            deleteSuggestion(suggestion.id)
                        }}>Delete</button>


                        : ""
                    }
                </div>
            </div>
            <div className="like_button">
                <center>

                    <p>Click on the Like Button</p>

                    <div className="heart_like"
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