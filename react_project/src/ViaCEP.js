import { useState ,useEffect } from "react"

export const ViaCep = () => {

    const [ endereco, setEndereco ] = useState({});

    const fetchCEP = (cep) => {
        fetch('https://viacep.com.br/ws/01001-000/json/')          //${cep} = problema
        .then(dados => dados.json())
        .then(endereco => {
            console.log(endereco);
            setEndereco(endereco);
        })
    }

    useEffect(() => {
        fetchCEP("01001-000");
    }, [])


    return(
        <table>
            <tbody>
                <tr>
                    <td>Bairro:</td>
                    <td>{endereco.bairro}</td>
                </tr>
                <tr>
                    <td>Complemento:</td>
                    <td>{endereco.complemento}:</td>
                </tr>
                <tr>
                    <td>UF:</td>
                    <td>{endereco.uf}:</td>
                </tr>
                <tr>
                    <td>Localidade:</td>
                    <td>{endereco.localidade}:</td>
                </tr>
            </tbody>
        </table>
    )
} 
