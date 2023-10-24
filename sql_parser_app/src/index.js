import React from "react";
//import { render } from "react-dom";
import { createRoot } from "react-dom/client";

import RegistSql from "./components/RegistSql";
import InputSql from "./components/InputSql";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <>
        <RegistSql />
        <hr />
        <InputSql />
    </>
);
