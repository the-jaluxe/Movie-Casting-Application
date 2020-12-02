import db from "../../base";
import "../../App.js";
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import DisplayActor from "./DisplayActor"
import ToggleBar from "./ToggleBar"

const Search = (props) => {
        const history = useHistory();
        const [count, setCount] = useState(6);
        console.log(props.location.state[2]);
        const tags = {
                gender: props.location.state[2].roleGender,
                age: props.location.state[2].roleAge,
                height: props.location.state[2].roleHeight,
                weight: props.location.state[2].roleWeight
        };

        window.onscroll = function (ev) {
                if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
                        setCount(count + 6);
                }
        };

        var topDisplay = null;
        if (props.location.state != null) {
            topDisplay  = <div className="s-navbar">
                <h1 onClick={() => history.goBack()}>
                    {props.location.state[0].name} <a>Showing result for {props.location.state[2].name}</a>
                </h1>
            </div>
        } else {
            topDisplay = <div className="s-navbar">
                <h1 onClick={() => history.push("/")}>
                    My Projects
                </h1>

            </div>
        }

        return (
                <div>
                        {topDisplay}
                        <div className="s-main">
                                <div className="s-sidebar">
                                        <h1>Project list</h1>
                                        <h2> - Project1</h2>
                                        <div id={"mini-project"}>
                                                <h2>project</h2>
                                        </div>
                                </div>
                        </div>
                        <DisplayActor tags={tags} numActor={count} project={props.location.state[0]} role={props.location.state[2]} />

                </div>
        )
}

export default Search;