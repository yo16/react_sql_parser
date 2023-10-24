import React, { useState, useRef } from "react";

import ParsedSql from "./ParsedSql";

export default function InputSql() {
    const ta_query = useRef();
    const [query, setQuery] = useState("");

    const handleInputChange = () => {
        setQuery(ta_query.current.value);
    }

    return(
        <>
            <textarea ref={ta_query} style={{height:"300px", width:"600px" }}></textarea>
            <input type="button" value="Parse" onClick={handleInputChange} />
            <ParsedSql query={query} />
        </>
    );
}
