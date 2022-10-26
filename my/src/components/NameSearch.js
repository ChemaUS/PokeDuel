import React from "react";

function NameSearch({ pokiSearch, setPokiSearch }) {


    return (
        <>

            <div id="pokiSearch">
                <input
                    className="searchBar"
                    placeholder="Search by Pokemon Name..."
                    value={pokiSearch}
                    onChange={(e) => setPokiSearch(e.target.value)}>
                </input>
            </div>
        </>
    )


}
export default NameSearch