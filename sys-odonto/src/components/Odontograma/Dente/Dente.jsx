import styles from './Dente.module.css'
export default function Dente() {
    return (
        <div>
            <svg>
                <g >
                    <polygon
                        points="0,0 20,0 15,5 5,5"
                        className={styles.dente}
                    />
                    <polygon
                        points="5,15 15,15 20,20 0,20"
                    // className={getClassNamesByZone('bottom')}
                    />
                    <polygon
                        points="15,5 20,0 20,20 15,15"
                    // className={getClassNamesByZone('left')}
                    />
                    <polygon
                        points="0,0 5,5 5,15 0,20"
                    />
                    <polygon
                        points="5,5 15,5 15,15 5,15"
                    // className={getClassNamesByZone('center')}
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
        </div>
    );
}