import styles from './Dente.module.css'
export default function Dente({ dente, onClick }) {

    function definirClasse(posicao) {
        // if (dente.hasOwnProperty(posicao)) {
        //     return dente[posicao] == "Red" ? styles.Red : styles.Green
        // }
        // else {
        //     return styles.default;
        // }
        return styles.default;
    }

    return (
        <svg width="40" height="40">
            <g transform="scale(2)">
                <polygon
                    points="0,0 20,0 15,5 5,5"
                    className={definirClasse('top')}
                    onClick={() => onClick(dente, 'top')}
                />
                <polygon
                    points="5,15 15,15 20,20 0,20"
                    className={definirClasse('bot')}
                    onClick={() => onClick(dente, 'bot')}
                />
                <polygon
                    points="15,5 20,0 20,20 15,15"
                    className={definirClasse('right')}
                    onClick={() => onClick(dente, 'right')}
                />
                <polygon
                    points="0,0 5,5 5,15 0,20"
                    className={definirClasse('left')}
                    onClick={() => onClick(dente, 'left')}
                />
                <polygon
                    points="5,5 15,5 15,15 5,15"
                    className={definirClasse('center')}
                    onClick={() => onClick(dente, 'center')}
                />
                <text
                    x="6"
                    y="30"
                    stroke="navy"
                    fill="navy"
                    strokeWidth="0.1"
                    className="tooth">
                    {/* {number} */}
                </text>
            </g>
            {/* {contextMenu} */}
        </svg>

    );
}