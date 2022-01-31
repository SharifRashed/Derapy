import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationView.js";
// import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Derapy.css";

export const Derapy = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("derapy_customer")) {
                    return (
                        <>
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
);