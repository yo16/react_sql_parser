import React, { useState } from "react";
import { Parser } from "node-sql-parser/build/bigquery";

export default function ParsedSql({query="select * from duel;"}){
    const parser = new Parser();
    const ast = parser.astify(query);
    console.log(ast);

    return (
        <>
            <h1>SQL Parse TEST!</h1>
            {JSON.stringify(ast, null, 2)}
        </>
    );
}

