import React, { useState } from "react";

import ParsedSql from "./ParsedSql";

export default function RegistSql() {
    const [selectedFile, setSelectedFile] = useState("");

    const handleInputChange = event => {
        // eventからFileオブジェクトを取り出す
        const file = event.target.files[0];

        // FileReaderを作成
        const reader = new FileReader();
        // コールバック関数を準備
        reader.onload = () => {
            setSelectedFile(reader.result);
        };
        // 読む
        reader.readAsText(file);
    }

    return(
        <>
            <input type="file" name="upload_file" onChange={handleInputChange} />
            <ParsedSql query={selectedFile} />
        </>
    );
}
