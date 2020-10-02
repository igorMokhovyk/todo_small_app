import React from "react";

function Trash(props) {
    return (
        <div>
            <button disabled='disabled'>Trash</button>
            <>
                <select>
                    <option>{props.trashSet}Trash</option>
                </select>
            </>
        </div>

)
};


export default Trash;