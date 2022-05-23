import { Body, Main } from "./style"

import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";

const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];

function Card() {
    const [files, setFiles] = useState([]);

    const handleChange = (file) => {
        setFiles([...files, file]);
        const confirm = window.confirm(`Você está prestes a enviar 
                                        ${files.length + 1} arquivos ao futuro. 
                                        Deseja confirmar?`)
    }

    return (
        <Main>
            <FileUploader handleChange={handleChange}
                name="sender-files"
                children={<Body>Solte aqui os arquivos que você deseja enviar para o futuro</Body>}
                types={fileTypes} />


        </Main>
    )
}

export default Card