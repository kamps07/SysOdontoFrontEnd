import Dente from "./Dente/Dente";

export default function Odontograma() {

    const dentes = [
        {
            "id": 1,
            "top": "Red"
        }, {
            "id": 2,
            "top": "Red",
            "center": "Green",
            "observacao": ""
        }
    ]

    return (
        <div>
            <Dente dente={dentes[0]}></Dente>
            <Dente dente={dentes[1]}></Dente>
        </div>
    );
}