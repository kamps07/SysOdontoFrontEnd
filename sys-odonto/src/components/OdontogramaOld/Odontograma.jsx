import Dente from "./Dente/Dente";
import styles from "./Odontograma.module.css";
import dente1 from '../../assets/Dentes/dente1.svg';

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

            <div className={styles.quadrantes}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <span>Quadrante 1</span>

                        <div className={styles.rowGradeDente}>
                            <div className={styles.columnGradeDente}>
                                 {/* <img className={styles.imgDente} src={dente1}></img> */}
                                1</div>
                            <div className={styles.columnGradeDente}>
                                2</div>
                            <div className={styles.columnGradeDente}> 3</div>
                            <div className={styles.columnGradeDente}> 4</div>
                            <div className={styles.columnGradeDente}> 5</div>
                            <div className={styles.columnGradeDente}> 6</div>
                            <div className={styles.columnGradeDente}> 7</div>
                            <div className={styles.columnGradeDente}> 8</div>
                        </div>

                        <div className={styles.rowGradeDente}>
                            <div className={styles.columnGradeDente}> 
                                <Dente dente={dentes[0]}></Dente>
                            </div>
                            <div className={styles.columnGradeDente}>
                                <Dente dente={dentes[1]}></Dente>
                            </div>
                            <div className={styles.columnGradeDente}>
                                <Dente dente={dentes[1]}></Dente>
                            </div>
                            <div className={styles.columnGradeDente}>
                                <Dente dente={dentes[1]}></Dente>
                            </div>
                            <div className={styles.columnGradeDente}>
                                <Dente dente={dentes[1]}></Dente>
                            </div>
                            <div className={styles.columnGradeDente}>
                                <Dente dente={dentes[1]}></Dente>
                            </div>
                            <div className={styles.columnGradeDente}> 
                                <Dente dente={dentes[1]}></Dente>
                            </div>
                            <div className={styles.columnGradeDente}> 
                                <Dente dente={dentes[1]}></Dente>
                            </div>
                        </div>

                        <div className={styles.rowGradeDente}>
                            <div className={styles.columnGradeDente}><span>1</span></div>
                            <div className={styles.columnGradeDente}><span>2</span></div>
                            <div className={styles.columnGradeDente}><span>3</span></div>
                            <div className={styles.columnGradeDente}><span>4</span></div>
                            <div className={styles.columnGradeDente}><span>5</span></div>
                            <div className={styles.columnGradeDente}><span>6</span></div>
                            <div className={styles.columnGradeDente}><span>7</span></div>
                            <div className={styles.columnGradeDente}><span>8</span></div>
                        </div>



                    </div>
                    <div className={styles.column}>
                        <span>Quadrante 2</span>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <span>Quadrante 3</span>
                    </div>
                    <div className={styles.column}>
                        <span>Quadrante 4</span>
                    </div>
                </div>
            </div>



        </div>

    );
}