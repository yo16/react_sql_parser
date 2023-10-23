import React from "react";
//import { render } from "react-dom";
import { createRoot } from "react-dom/client";

import ParsedSql from "./components/ParsedSql";
import data from "../data/query.json";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ParsedSql query={data.query} />);
