import React from "react";
//import { render } from "react-dom";
import { createRoot } from "react-dom/client";

import RegistSql from "./components/RegistSql";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RegistSql />);
