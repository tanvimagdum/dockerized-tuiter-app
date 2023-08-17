

import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {lw, qu} from "./reducers/reducer";
const QJ = () => {
    const {ly} = useSelector(vk => vk)
    const dispatch = useDispatch();
    console.log(ly);
    return (
        <div>
            <h1>{ly}</h1>
            <button onClick={() => dispatch(lw())}>YL</button>
            <button onClick={() => dispatch(qu())}>EO</button>
        </div>
    )
}

export default QJ