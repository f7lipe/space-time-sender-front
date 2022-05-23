import { Body, Main, Message, Field, Input } from "./style"

import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import axios from "axios";


const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];

function Card() {
    const [files, setFiles] = useState([]);
    const [gateResponse, setGateResponse] = useState()

    const handleChange = (file) => {
        setFiles([...files, file]);
        const confirm = window.confirm(`Você está prestes a enviar 
                                        ${files.length + 1} arquivos ao futuro. 
                                        Deseja confirmar?`)
        if (confirm) send(files).then((response)=>{
            setGateResponse(response.data)
        })
    }

    return (
        <Main>
            {!gateResponse && <FileUploader handleChange={handleChange}
                name="sender-files"
                label='Solte aqui os arquivos que você deseja enviar para o futuro. '
                types={fileTypes} />}

            {gateResponse && <Body>
                    <Message>{gateResponse.message}</Message>
                    <Field>
                        <Input type="text" value={gateResponse.token} disabled={true} id="keyInput"/>
                    </Field>
                </Body>}
        </Main>
    )
}


function send(files){
    let formData = new FormData()
    files.forEach((file) => formData.append('files', file))

    return axios({
        method: 'post',
        url: 'http://localhost:5000/gate',
        data: formData,
        headers: {'content-type': 'multipart/forma-data'}
    })
}

export default Card