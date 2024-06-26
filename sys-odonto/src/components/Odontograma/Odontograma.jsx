import React from 'react'
import styles from './Odontograma.module.css'
import { useEffect, useState } from 'react'
import Dente from '../OdontogramaOld/Dente/Dente'
import ModalOdontograma from '../ModalOdontograma/ModalOdontograma'
import { BackgroundColor } from 'devextreme-react/cjs/circular-gauge'

export default function Odontograma({ paciente, dentesFocados, setDentesFocados }) {

    const dentes = [0, 1, 2, 3, 4]

    const [modalOdontogramaAberto, setModalOdontogramaAberto] = useState(false);
    const [posicaoSelecionada, setPosicaoSelecionada] = useState('');
    const [denteSelecionado, setDenteSelecionado] = useState('');


    function handleMouseEnter(dente) {
        setDentesFocados(dentesAtuais => [...dentesAtuais, dente]);
    }

    function handleMouseLeave() {
        setDentesFocados([]);
    }

    function handleDenteClick(dente) {
        setPosicaoSelecionada("all");
        setDenteSelecionado(dente);
        setModalOdontogramaAberto(true);
    }

    function handlePosicaoDenteDenteClick(dente, posicao) {
        setPosicaoSelecionada(posicao);
        setDenteSelecionado(dente);
        setModalOdontogramaAberto(true);
    }

    return (
        <div className={styles.container}>

            <ModalOdontograma
                modalAberto={modalOdontogramaAberto}
                setModalAberto={setModalOdontogramaAberto}
                posicao={posicaoSelecionada}
                dente={denteSelecionado}
                paciente={paciente}
            ></ModalOdontograma>



            <div className={styles.up}>

                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="50%" version="1.1"
                    style={{
                        shapeRendering: 'geometricPrecision',
                        textRendering: 'geometricPrecision',
                        imageRendering: 'optimizeQuality',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }} viewBox="0 0 24624.3 3181.5">

                    <g className={dentesFocados.includes(1) ? styles.denteSelecionado : styles.dente} onClick={() => handleDenteClick(1)} id="_660231600" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave()}>
                        <path style={{ pointerEvents: 'all' }} id="Dente_x0020_1" d="M216.38 2213.77c0,0 -342.13,928.66 81.46,896.07 423.59,-32.59 362.5,-101.83 643.54,4.07 281.04,105.9 476.54,-32.58 513.2,-191.43 36.66,-158.85 -118.11,-631.33 -118.11,-631.33 0,0 -58.51,-297.77 -49.27,-741.26 9.24,-443.49 -184.8,-446.57 -261.79,-73.91 -76.99,372.66 -252.55,692.97 -372.66,384.98 -120.11,-307.99 9.24,-705.29 -150.91,-652.93 -160.15,52.36 -207.3,127.64 -246.38,566.69 -39.08,439.05 -39.08,439.05 -39.08,439.05z" />
                        <path style={{ pointerEvents: 'all' }} id="Dente_x0020_1_11" d="M615.81 1729.49c0,0 276.88,-1114.88 332.25,16.45" />
                        <path style={{ pointerEvents: 'all' }} id="Dente_x0020_1_12" d="M327.46 2841.4c0,0 101.44,50.73 388.86,19.73 287.42,-31 315.59,50.72 352.23,61.99" />
                        <path style={{ pointerEvents: 'all' }} id="Dente_x0020_1_13" d="M380.33 2240.02c0,0 646.51,-193.62 835.24,46.87" />
                        <path style={{ pointerEvents: 'all' }} id="Dente_x0020_1_14" d="M753.2 2734.34c0,0 62.43,135.76 -34.09,234.38" />
                    </g>
                    <g className={dentesFocados.includes(2) ? styles.denteSelecionado : styles.dente} onClick={() => handleDenteClick(2)} id="_660231600" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave()}>
                        <path style={{ pointerEvents: 'all' }} d="M2658.13 1132.91c0,0 6.08,-257.94 -217.38,12.02 -223.46,269.96 -257.07,1045.47 -242.57,1075.36" />
                        <path style={{ pointerEvents: 'all' }} d="M2385.81 2190.63c0,0 530.31,-176.78 791.94,4.71" />
                        <path style={{ pointerEvents: 'all' }} d="M2911.4 1670.11c0,0 -94.78,-768.76 -257.25,-539.21" />
                        <path style={{ pointerEvents: 'all' }} d="M2330.31 2822.4c0,0 94.9,115.09 407.85,28.27" />
                        <path style={{ pointerEvents: 'all' }} d="M3097.55 2915.27c0,0 -236.22,-109.01 -359.39,-64.6" />
                        <path style={{ pointerEvents: 'all' }} d="M2719.98 2957.67c0,0 76.73,-113.06 54.52,-203.92" />
                        <path style={{ pointerEvents: 'all' }} d="M2195.09 2218.76c0,0 -457.3,1127.94 466.09,876.5l156.06 -43.35c0,0 268.79,112.7 390.17,65.02 121.38,-47.68 312.13,-255.77 221.09,-533.22 -91.04,-277.45 -117.04,-476.86 -112.71,-498.54 4.33,-21.68 -8.49,-799.03 -64.67,-799.03 0,0 -64.16,-274.77 -178.97,-225.2 -114.81,49.57 -151.1,525.99 -165.57,594.37 -14.47,68.38 -147.55,313.65 -199.73,149.27 -52.18,-164.38 -103.75,-656.35 -55.79,-675.21" />
                    </g>
                    <g className={dentesFocados.includes(3) ? styles.denteSelecionado : styles.dente} onClick={() => handleDenteClick(3)} id="_660231600" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave()}>
                        <path style={{ pointerEvents: 'all' }} d="M4228.2 2203.37c0,0 -405.28,953.08 191.5,912.99 596.78,-40.09 89.08,-138.07 636.87,8.9 547.79,146.97 409.72,-485.44 405.27,-552.24 -4.45,-66.8 -146.97,-507.71 -111.34,-610.14 35.63,-102.43 59.91,-1221.78 -133.61,-977.33 -193.52,244.45 -268.21,858.98 -421,774.1 -152.79,-84.88 -264.83,-651.87 -291.99,-719.78 -27.16,-67.91 -108.64,-224.08 -203.71,78.09 -95.07,302.17 -83.11,1112.99 -71.99,1085.41z" />
                        <path style={{ pointerEvents: 'all' }} d="M4537.66 1162c0,0 91.87,-291.88 166.56,-169.66 74.69,122.22 201.46,705.46 201.46,705.46" />
                        <path style={{ pointerEvents: 'all' }} d="M4405.07 2203.28c0,0 506.62,-219.09 812.42,-4.57" />
                        <path style={{ pointerEvents: 'all' }} d="M4389.63 2866.64c0,0 173.91,145.59 380.17,-4.05 0,0 214.36,-38.42 333.66,101.11" />
                        <path style={{ pointerEvents: 'all' }} d="M4771.82 2769.57c0,0 38.42,179.98 -10.11,192.11" />
                    </g>
                    <g className={dentesFocados.includes(4) ? styles.denteSelecionado : styles.dente} onClick={() => handleDenteClick(4)} id="_660231600" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={() => handleMouseLeave()}>
                        <path style={{ pointerEvents: 'all' }} d="M6172.75 2258.55c0,0 -147,594.42 -57.52,683.9 89.48,89.48 345.14,313.18 639.15,178.96 294.01,-134.22 223.7,-472.98 204.53,-530.5 -19.17,-57.52 -172.57,-485.75 -166.18,-530.49 6.39,-44.74 -134.23,-613.6 -121.44,-722.25 12.79,-108.65 19.17,-658.32 -76.7,-690.28 0,0 -115.04,-236.48 -147,108.66 -31.96,345.14 -321.44,1720.1 -274.84,1502z" />
                        <path style={{ pointerEvents: 'all' }} d="M6313.37 2296.9c0,0 265.02,-177.8 415.45,-57.52" />
                        <path style={{ pointerEvents: 'all' }} d="M6308.16 2997.87c0,0 387.38,-67.91 472.51,0" />
                        <path style={{ pointerEvents: 'all' }} d="M6562.59 3060.04c0,0 51.66,-215.21 -39.21,-195.12" />
                    </g>
                    <g className={dentesFocados.includes(5) ? styles.denteSelecionado : styles.dente} onClick={() => handleDenteClick(5)} id="_660231600" onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={() => handleMouseLeave()}>
                        <path style={{ pointerEvents: 'all' }} d="M7577.3 2221.17c0,0 -254.26,423.76 -93.23,767 0,0 216.11,211.88 432.23,173.74 0,0 457.65,-97.47 427.99,-457.66 0,0 -161.03,-745.8 -169.5,-805.13 -8.47,-59.33 -230.56,-1528.27 -320.73,-1514.4 -90.17,13.87 -110.97,110.99 -173.4,575.72 -62.43,464.73 6.93,1255.48 -103.36,1260.73z" />
                        <path style={{ pointerEvents: 'all' }} d="M7672.82 2249.15c0,0 294.27,-129 471.65,36.28" />
                        <path style={{ pointerEvents: 'all' }} d="M7648.63 2950.58c0,0 229.77,-32.26 431.34,20.15" />
                        <path style={{ pointerEvents: 'all' }} d="M7856.22 2845.78c0,0 -40.81,93.95 24.92,184.33" />
                    </g>
                    <g className={dentesFocados.includes(6) ? styles.denteSelecionado : styles.dente} onClick={() => handleDenteClick(6)} id="_660231600" onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={() => handleMouseLeave()}>
                        <path style={{ pointerEvents: 'all' }} d="M8870.66 2245.29c0,0 -392.48,836.8 348.05,888.64" />
                        <path style={{ pointerEvents: 'all' }} d="M9566.76 2852.53c0,0 -88.86,303.61 -348.05,281.4" />
                        <path style={{ pointerEvents: 'all' }} d="M9455.68 1808.38c0,0 162.92,755.34 111.08,1044.15" />
                        <path style={{ pointerEvents: 'all' }} d="M9455.68 1808.38c0,0 -143.56,-1750.82 -252.48,-1734.06 -108.92,16.76 -92.16,259.73 -134.05,335.14 -41.89,75.41 -198.49,1835.83 -198.49,1835.83" />
                        <path style={{ pointerEvents: 'all' }} d="M8976.98 2227.59c0,0 75.41,-92.16 402.17,0" />
                    </g>
                    <g className={dentesFocados.includes(7) ? styles.denteSelecionado : styles.dente} onClick={() => handleDenteClick(7)} id="_660231600" onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={() => handleMouseLeave()}>
                        <path style={{ pointerEvents: 'all' }} d="M10076.15 2249.79l-31.68 766.59c0,0 215.41,171.07 728.58,38.02l6.33 -760.26c0,0 -164.71,-367.46 -171.05,-823.61 -6.34,-456.15 -196.41,-1368.47 -247.09,-1140.39 -50.68,228.08 -171.04,1121.39 -183.72,1381.14 -12.68,259.75 -105.05,627.33 -101.37,538.51z" />
                        <path style={{ pointerEvents: 'all' }} d="M10209.19 2186.44c0,0 69.69,-171.06 367.46,-57.02" />
                    </g>
                    <g className={dentesFocados.includes(8) ? styles.denteSelecionado : styles.dente} onClick={() => handleDenteClick(8)} id="_660231600" onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={() => handleMouseLeave()}>
                        <path style={{ pointerEvents: 'all' }} d="M11230.2 2230.85l0 756.26c0,0 232.7,274.24 839.37,33.24 0,0 8.3,-831.06 -49.87,-831.06 -58.17,0 -315.8,-1844.94 -315.8,-1844.94 0,0 -124.65,-540.18 -224.38,-8.31 -99.73,531.87 -157.91,2019.47 -249.32,1894.81z" />
                        <path style={{ pointerEvents: 'all' }} d="M11387.29 2070.18c0,0 344.64,-225.36 502.32,-9.66" />
                    </g>
                    <g className={dentesFocados.includes(9) ? styles.denteSelecionado : styles.dente} onClick={() => handleDenteClick(9)} id="_660231600" onMouseEnter={() => handleMouseEnter(9)} onMouseLeave={() => handleMouseLeave()}>
                        <path style={{ pointerEvents: 'all' }} d="M13408.75 2237.42l0 756.26c0,0 -232.7,274.24 -839.37,33.24 0,0 -8.3,-831.06 49.87,-831.06 58.17,0 315.8,-1844.94 315.8,-1844.94 0,0 124.65,-540.18 224.38,-8.31 99.73,531.87 157.91,2019.47 249.32,1894.81z" />
                        <path style={{ pointerEvents: 'all' }} d="M13251.66 2076.75c0,0 -344.64,-225.36 -502.32,-9.66" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_660222576">
                        <path style={{ pointerEvents: 'all' }} d="M14534.91 2286.99l31.68 766.59c0,0 -215.41,171.07 -728.58,38.02l-6.33 -760.26c0,0 164.71,-367.46 171.05,-823.61 6.34,-456.15 196.41,-1368.47 247.09,-1140.39 50.68,228.08 171.04,1121.39 183.72,1381.14 12.68,259.75 105.05,627.33 101.37,538.51z" />
                        <path style={{ pointerEvents: 'all' }} d="M14401.87 2223.64c0,0 -69.69,-171.06 -367.46,-57.02" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_694356760">
                        <path style={{ pointerEvents: 'all' }} d="M15700.31 2199.4c0,0 392.48,836.8 -348.05,888.64" />
                        <path style={{ pointerEvents: 'all' }} d="M15004.21 2806.64c0,0 88.86,303.61 348.05,281.4" />
                        <path style={{ pointerEvents: 'all' }} d="M15115.29 1762.49c0,0 -162.92,755.34 -111.08,1044.15" />
                        <path style={{ pointerEvents: 'all' }} d="M15115.29 1762.49c0,0 143.56,-1750.82 252.48,-1734.06 108.92,16.76 92.16,259.73 134.05,335.14 41.89,75.41 198.49,1835.83 198.49,1835.83" />
                        <path style={{ pointerEvents: 'all' }} d="M15593.99 2181.7c0,0 -75.41,-92.16 -402.17,0" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_659097512">
                        <path style={{ pointerEvents: 'all' }} d="M17053.23 2193.17c0,0 254.26,423.76 93.23,767 0,0 -216.11,211.88 -432.23,173.74 0,0 -457.65,-97.47 -427.99,-457.66 0,0 161.03,-745.8 169.5,-805.13 8.47,-59.33 230.56,-1528.27 320.73,-1514.4 90.17,13.87 110.97,110.99 173.4,575.72 62.43,464.73 -6.93,1255.48 103.36,1260.73z" />
                        <path style={{ pointerEvents: 'all' }} d="M16957.71 2221.15c0,0 -294.27,-129 -471.65,36.28" />
                        <path style={{ pointerEvents: 'all' }} d="M16981.9 2922.58c0,0 -229.77,-32.26 -431.34,20.15" />
                        <path style={{ pointerEvents: 'all' }} d="M16774.31 2817.78c0,0 40.81,93.95 -24.92,184.33" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_712743136">
                        <path style={{ pointerEvents: 'all' }} d="M18328.03 2266.8c0,0 147,594.42 57.52,683.9 -89.48,89.48 -345.14,313.18 -639.15,178.96 -294.01,-134.22 -223.7,-472.98 -204.53,-530.5 19.17,-57.52 172.57,-485.75 166.18,-530.49 -6.39,-44.74 134.23,-613.6 121.44,-722.25 -12.79,-108.65 -19.17,-658.32 76.7,-690.28 0,0 115.04,-236.48 147,108.66 31.96,345.14 321.44,1720.1 274.84,1502z" />
                        <path style={{ pointerEvents: 'all' }} d="M18187.41 2305.15c0,0 -265.02,-177.8 -415.45,-57.52" />
                        <path style={{ pointerEvents: 'all' }} d="M18192.62 3006.12c0,0 -387.38,-67.91 -472.51,0" />
                        <path style={{ pointerEvents: 'all' }} d="M17938.19 3068.29c0,0 -51.66,-215.21 39.21,-195.12" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_660186600">
                        <path style={{ pointerEvents: 'all' }} d="M19172.45 2237.46c0,0 -405.28,953.08 191.5,912.99 596.78,-40.09 89.08,-138.07 636.87,8.9 547.79,146.97 409.72,-485.44 405.27,-552.24 -4.45,-66.8 -146.97,-507.71 -111.34,-610.14 35.63,-102.43 59.91,-1221.78 -133.61,-977.33 -193.52,244.45 -268.21,858.98 -421,774.1 -152.79,-84.88 -264.83,-651.87 -291.99,-719.78 -27.16,-67.91 -108.64,-224.08 -203.71,78.09 -95.07,302.17 -83.11,1112.99 -71.99,1085.41z" />
                        <path style={{ pointerEvents: 'all' }} d="M20013.71 1196.09c0,0 -91.87,-291.88 -166.56,-169.66 -74.69,122.22 -201.46,705.46 -201.46,705.46" />
                        <path style={{ pointerEvents: 'all' }} d="M20146.3 2237.37c0,0 -506.62,-219.09 -812.42,-4.57" />
                        <path style={{ pointerEvents: 'all' }} d="M20161.74 2900.73c0,0 -173.91,145.59 -380.17,-4.05 0,0 -214.36,-38.42 -333.66,101.11" />
                        <path style={{ pointerEvents: 'all' }} d="M19779.55 2803.66c0,0 -38.42,179.98 10.11,192.11" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_660212232">
                        <path style={{ pointerEvents: 'all' }} d="M21698.52 1110.99c0,0 6.08,-257.94 -217.38,12.02 -223.46,269.96 -257.07,1045.47 -242.57,1075.36" />
                        <path style={{ pointerEvents: 'all' }} d="M21426.2 2168.71c0,0 530.31,-176.78 791.94,4.71" />
                        <path style={{ pointerEvents: 'all' }} d="M21951.79 1648.19c0,0 -94.78,-768.76 -257.25,-539.21" />
                        <path style={{ pointerEvents: 'all' }} d="M21370.7 2800.48c0,0 94.9,115.09 407.85,28.27" />
                        <path style={{ pointerEvents: 'all' }} d="M22137.94 2893.35c0,0 -236.22,-109.01 -359.39,-64.6" />
                        <path style={{ pointerEvents: 'all' }} d="M21760.37 2935.75c0,0 76.73,-113.06 54.52,-203.92" />
                        <path style={{ pointerEvents: 'all' }} d="M21235.48 2196.84c0,0 -457.3,1127.94 466.09,876.5l156.06 -43.35c0,0 268.79,112.7 390.17,65.02 121.38,-47.68 312.13,-255.77 221.09,-533.22 -91.04,-277.45 -117.04,-476.86 -112.71,-498.54 4.33,-21.68 -8.49,-799.03 -64.67,-799.03 0,0 -64.16,-274.77 -178.97,-225.2 -114.81,49.57 -151.1,525.99 -165.57,594.37 -14.47,68.38 -147.55,313.65 -199.73,149.27 -52.18,-164.38 -103.75,-656.35 -55.79,-675.21" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_611174000">
                        <path style={{ pointerEvents: 'all' }} id="Dente_x0020_1_15" d="M24333.39 2109.19c0,0 342.13,928.66 -81.46,896.07 -423.59,-32.59 -362.5,-101.83 -643.54,4.07 -281.04,105.9 -476.54,-32.58 -513.2,-191.43 -36.66,-158.85 118.11,-631.33 118.11,-631.33 0,0 58.51,-297.77 49.27,-741.26 -9.24,-443.49 184.8,-446.57 261.79,-73.91 76.99,372.66 252.55,692.97 372.66,384.98 120.11,-307.99 -9.24,-705.29 150.91,-652.93 160.15,52.36 207.3,127.64 246.38,566.69 39.08,439.05 39.08,439.05 39.08,439.05z" />
                        <path style={{ pointerEvents: 'all' }} id="Dente_x0020_1_16" d="M23933.96 1624.91c0,0 -276.88,-1114.88 -332.25,16.45" />
                        <path style={{ pointerEvents: 'all' }} id="Dente_x0020_1_17" d="M24222.31 2736.82c0,0 -101.44,50.73 -388.86,19.73 -287.42,-31 -315.59,50.72 -352.23,61.99" />
                        <path style={{ pointerEvents: 'all' }} id="Dente_x0020_1_18" d="M24169.44 2135.44c0,0 -646.51,-193.62 -835.24,46.87" />
                        <path style={{ pointerEvents: 'all' }} id="Dente_x0020_1_19" d="M23796.57 2629.76c0,0 -62.43,135.76 34.09,234.38" />
                    </g>
                </svg>

            </div>
            <div className={styles.division}>
                <div className={styles.rowGradeDente}>
                    <div className={styles.columnGradeDente}>
                        01
                        <Dente dente={1} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        02
                        <Dente dente={2} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        03
                        <Dente dente={3} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        04
                        <Dente dente={4} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        05
                        <Dente dente={5} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        06
                        <Dente dente={6} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        07
                        <Dente dente={7} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        08
                        <Dente dente={8} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        09
                        <Dente dente={9} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        10
                        <Dente dente={10} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        11
                        <Dente dente={11} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        12
                        <Dente dente={12} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        13
                        <Dente dente={13} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        14
                        <Dente dente={14} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        15
                        <Dente dente={15} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        16
                        <Dente dente={16} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                </div>

                <div className={styles.rowGradeDente}>
                    <div className={styles.columnGradeDente}>
                        32
                        <Dente dente={32} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        31
                        <Dente dente={31} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        30
                        <Dente dente={30} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        29
                        <Dente dente={29} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        28
                        <Dente dente={28} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        27
                        <Dente dente={27} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        26
                        <Dente dente={26} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        25
                        <Dente dente={25} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>


                    <div className={styles.columnGradeDente}>
                        24
                        <Dente dente={24} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        23
                        <Dente dente={23} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        22
                        <Dente dente={22} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        21
                        <Dente dente={21} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        20
                        <Dente dente={20} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        19
                        <Dente dente={19} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        18
                        <Dente dente={18} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                    <div className={styles.columnGradeDente}>
                        17
                        <Dente dente={17} onClick={handlePosicaoDenteDenteClick}></Dente>
                    </div>
                </div>

            </div>
            <div className={styles.down}>
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="50%" version="1.1"
                    style={{
                        shapeRendering: 'geometricPrecision',
                        textRendering: 'geometricPrecision',
                        imageRendering: 'optimizeQuality',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }}
                    viewBox="0 0 24624.3 2981.5">
                    <g onClick={() => handleDenteClick(1)} id="_656914288">
                        <path style={{ pointerEvents: 'all' }} d="M24336.45 147.12c0,0 436.96,64.47 157.59,909.73 0,0 0,630.36 -64.47,866.75 -64.47,236.39 -222.06,1131.8 -379.65,-78.79 0,0 -186.24,-680.51 -336.67,14.32 0,0 -14.33,494.26 -57.31,558.73 -42.98,64.47 -200.57,-193.41 -286.53,-444.12 -85.96,-250.71 -42.98,-386.8 -64.47,-487.09 -21.49,-100.29 42.98,-479.94 -100.28,-594.55 -143.26,-114.61 -186.25,-852.43 293.69,-702 479.94,150.43 873.8,-32.55 873.8,-32.55" />
                        <path style={{ pointerEvents: 'all' }} d="M24293.47 1085.51c0,0 -635.64,70.34 -845.26,-42.98" />
                        <path style={{ pointerEvents: 'all' }} d="M24193.18 362.02c0,0 -415.46,114.62 -673.34,78.8" />
                        <path style={{ pointerEvents: 'all' }} d="M23942.47 526.78c0,0 -19.35,-115.81 -157.59,-207.74" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_658644776">
                        <path style={{ pointerEvents: 'all' }} d="M22183.32 181.38c0,0 436.93,-50.14 136.09,866.73 0,0 7.16,967.01 -50.14,1060.13 -57.3,93.12 -222.05,623.18 -336.66,386.8 0,0 21.49,-988.49 -186.24,-881.05 -207.73,107.44 -179.07,916.87 -193.4,916.87 -14.33,0 -136.09,444.11 -358.15,-823.75 0,0 28.64,-408.29 -7.17,-558.72 -35.81,-150.43 -372.48,-852.41 136.1,-974.18 0,0 343.82,71.64 479.92,78.8 136.1,7.16 379.65,-71.63 379.65,-71.63z" />
                        <path style={{ pointerEvents: 'all' }} d="M22168.99 1141.22c0,0 -737.79,57.31 -845.24,-35.81" />
                        <path style={{ pointerEvents: 'all' }} d="M22083.03 410.59c0,0 -357.53,93.31 -687.65,42.98" />
                        <path style={{ pointerEvents: 'all' }} d="M21810.84 611.16c0,0 -50.13,-222.06 -193.4,-293.69" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_658672872">
                        <path style={{ pointerEvents: 'all' }} d="M20242.05 263.16c0,0 286.52,21.5 257.87,594.54 0,0 -121.78,186.23 -157.59,551.55 -35.81,365.32 164.76,601.7 7.17,1189.07 -157.59,587.37 -300.85,-386.81 -300.85,-386.81 0,0 -150.43,-544.38 -272.2,-458.43 -121.77,85.95 -222.05,981.33 -222.05,981.33 0,0 -71.63,472.77 -279.36,-372.47 0,0 -143.27,-659 -85.96,-1095.95 0,0 -164.74,-451.27 -85.95,-730.63 78.79,-279.36 343.82,-372.48 673.32,-186.24l350.99 -93.12 114.61 7.16z" />
                        <path style={{ pointerEvents: 'all' }} d="M20220.56 1251.66c0,0 -479.91,143.26 -909.7,-28.65" />
                        <path style={{ pointerEvents: 'all' }} d="M20113.12 478.06c0,0 -128.94,78.78 -766.45,64.46" />
                        <path style={{ pointerEvents: 'all' }} d="M19826.6 671.46c0,0 15.96,-146.38 -214.9,-279.36" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_659205960">
                        <path style={{ pointerEvents: 'all' }} d="M18507.7 321.71l-30.89 623.97c0,0 -253.3,691.92 -185.34,766.06 0,0 55.61,1031.71 -12.35,1124.38 -67.96,92.67 -43.24,383.03 -376.85,-710.46l-111.21 -871.08c0,0 -160.62,-420.1 -160.62,-481.88 0,-61.78 -49.43,-438.62 12.35,-488.05 61.78,-49.43 228.58,-197.7 327.43,-191.52 98.85,6.18 463.35,55.6 537.48,228.58z" />
                        <path style={{ pointerEvents: 'all' }} d="M18297.65 327.89c0,0 -302.71,-98.85 -426.27,-37.07" />
                        <path style={{ pointerEvents: 'all' }} d="M18101.73 424.12c0,0 -115.23,-189.7 -105.03,-278" />
                        <path style={{ pointerEvents: 'all' }} d="M18254.41 1093.95c0,0 -86.49,154.45 -383.03,61.78" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_714668944">
                        <path style={{ pointerEvents: 'all' }} d="M16995.63 682.46l-11.95 -388.63c0,0 -137.52,-245.14 -466.36,-221.22 -328.84,23.92 -352.75,370.69 -322.86,209.26 29.89,-161.43 -131.54,484.3 95.66,771.29 0,0 113.38,762.57 163.52,1008.7 50.14,246.13 91.17,656.37 232.47,729.29 141.3,72.92 41.02,-1285.38 136.74,-1490.49 95.72,-205.11 172.78,-618.2 172.78,-618.2z" />
                        <path style={{ pointerEvents: 'all' }} d="M16789.66 1077.51c0,0 -148.35,82.11 -434.44,-39.74" />
                        <path style={{ pointerEvents: 'all' }} d="M16791.82 276.2c0,0 -118.52,31.9 -405.68,-9.12" />
                        <path style={{ pointerEvents: 'all' }} d="M16651.48 387.84c0,0 -85.59,-92.7 -91.16,-214.24" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_715593456">
                        <path style={{ pointerEvents: 'all' }} d="M15167.93 97.44c0,0 300.68,97.4 389.61,334.55 88.93,237.15 -203.28,918.95 -152.46,974.01 0,0 20.98,1195.52 64.94,1219.49 43.96,23.97 -31.95,519.47 -147.84,243.75 -115.89,-275.72 -411.59,-1710.25 -387.61,-1710.25 23.98,0 -197.08,-490.34 -128.93,-783.87 68.15,-293.53 428.95,-250.56 362.29,-277.68z" />
                        <path style={{ pointerEvents: 'all' }} d="M15361.26 1035.56c0,0 -188.7,104.84 -387.88,-15.72" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_713309744">
                        <path style={{ pointerEvents: 'all' }} d="M14315.92 227.03l14.22 689.7c0,0 -92.43,234.64 -99.54,753.69 -7.11,519.05 49.78,1094.98 -63.99,1137.64 -113.77,42.66 -362.63,-1806.01 -362.63,-1806.01 0,0 -127.99,-632.82 -35.55,-767.91 92.44,-135.09 547.49,-7.11 547.49,-7.11z" />
                        <path style={{ pointerEvents: 'all' }} d="M14195.05 952.28c0,0 -106.65,113.76 -312.85,21.33" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_713619816">
                        <path style={{ pointerEvents: 'all' }} d="M11650.71 2784.41c0,0 120.34,468 227.31,-1791.74 0,0 70.11,-0.64 80.84,-150.92 10.73,-150.28 6.52,-502.61 6.52,-502.61 0,0 17.34,-107.56 -156.15,-93.68 -173.49,13.88 -409.44,-38.16 -416.38,45.11 -6.94,83.27 -52.04,711.32 27.76,732.14 79.8,20.82 62.45,246.36 62.45,246.36 0,0 65.93,1328.97 97.16,1405.3 31.23,76.33 70.49,110.04 70.49,110.04z" />
                        <path style={{ pointerEvents: 'all' }} d="M11420.61 1022.71c0,0 375.69,51.07 455.83,3.11" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_693858160">
                        <path style={{ pointerEvents: 'all' }} d="M12894.11 2767c0,0 120.34,468 227.31,-1791.74 0,0 70.11,-0.64 80.84,-150.92 10.73,-150.28 6.52,-502.61 6.52,-502.61 0,0 17.34,-107.56 -156.15,-93.68 -173.49,13.88 -409.44,-38.16 -416.38,45.11 -6.94,83.27 -52.04,711.32 27.76,732.14 79.8,20.82 62.45,246.36 62.45,246.36 0,0 65.93,1328.97 97.16,1405.3 31.23,76.33 70.49,110.04 70.49,110.04z" />
                        <path style={{ pointerEvents: 'all' }} d="M12664.01 1005.3c0,0 375.69,51.07 455.83,3.11" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_713999744">
                        <path style={{ pointerEvents: 'all' }} d="M10293.3 271.59l-14.22 689.7c0,0 92.43,234.64 99.54,753.69 7.11,519.05 -49.78,1094.98 63.99,1137.64 113.77,42.66 362.63,-1806.01 362.63,-1806.01 0,0 127.99,-632.82 35.55,-767.91 -92.44,-135.09 -547.49,-7.11 -547.49,-7.11z" />
                        <path style={{ pointerEvents: 'all' }} d="M10414.17 996.84c0,0 106.65,113.76 312.85,21.33" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_715591392">
                        <path style={{ pointerEvents: 'all' }} d="M9346.04 116.41c0,0 -300.68,97.4 -389.61,334.55 -88.93,237.15 203.28,918.95 152.46,974.01 0,0 -20.98,1195.52 -64.94,1219.49 -43.96,23.97 31.95,519.47 147.84,243.75 115.89,-275.72 411.59,-1710.25 387.61,-1710.25 -23.98,0 197.08,-490.34 128.93,-783.87 -68.15,-293.53 -428.95,-250.56 -362.29,-277.68z" />
                        <path style={{ pointerEvents: 'all' }} d="M9152.71 1054.53c0,0 188.7,104.84 387.88,-15.72" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_713633576">
                        <path style={{ pointerEvents: 'all' }} d="M7566.43 719.16l11.95 -388.63c0,0 137.52,-245.14 466.36,-221.22 328.84,23.92 352.75,370.69 322.86,209.26 -29.89,-161.43 131.54,484.3 -95.66,771.29 0,0 -113.38,762.57 -163.52,1008.7 -50.14,246.13 -91.17,656.37 -232.47,729.29 -141.3,72.92 -41.02,-1285.38 -136.74,-1490.49 -95.72,-205.11 -172.78,-618.2 -172.78,-618.2z" />
                        <path style={{ pointerEvents: 'all' }} d="M7772.4 1114.21c0,0 148.35,82.11 434.44,-39.74" />
                        <path style={{ pointerEvents: 'all' }} d="M7770.24 312.9c0,0 118.52,31.9 405.68,-9.12" />
                        <path style={{ pointerEvents: 'all' }} d="M7910.58 424.54c0,0 85.59,-92.7 91.16,-214.24" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_656831768">
                        <path style={{ pointerEvents: 'all' }} d="M6103.19 322.49l30.89 623.97c0,0 253.3,691.92 185.34,766.06 0,0 -55.61,1031.71 12.35,1124.38 67.96,92.67 43.24,383.03 376.85,-710.46l111.21 -871.08c0,0 160.62,-420.1 160.62,-481.88 0,-61.78 49.43,-438.62 -12.35,-488.05 -61.78,-49.43 -228.58,-197.7 -327.43,-191.52 -98.85,6.18 -463.35,55.6 -537.48,228.58z" />
                        <path style={{ pointerEvents: 'all' }} d="M6313.24 328.67c0,0 302.71,-98.85 426.27,-37.07" />
                        <path style={{ pointerEvents: 'all' }} d="M6509.16 424.9c0,0 115.23,-189.7 105.03,-278" />
                        <path style={{ pointerEvents: 'all' }} d="M6356.48 1094.73c0,0 86.49,154.45 383.03,61.78" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_728461016">
                        <path style={{ pointerEvents: 'all' }} d="M4346.86 227.45c0,0 -286.52,21.5 -257.87,594.54 0,0 121.78,186.23 157.59,551.55 35.81,365.32 -164.76,601.7 -7.17,1189.07 157.59,587.37 300.85,-386.81 300.85,-386.81 0,0 150.43,-544.38 272.2,-458.43 121.77,85.95 222.05,981.33 222.05,981.33 0,0 71.63,472.77 279.36,-372.47 0,0 143.27,-659 85.96,-1095.95 0,0 164.74,-451.27 85.95,-730.63 -78.79,-279.36 -343.82,-372.48 -673.32,-186.24l-350.99 -93.12 -114.61 7.16z" />
                        <path style={{ pointerEvents: 'all' }} d="M4368.35 1215.95c0,0 479.91,143.26 909.7,-28.65" />
                        <path style={{ pointerEvents: 'all' }} d="M4475.79 442.35c0,0 128.94,78.78 766.45,64.46" />
                        <path style={{ pointerEvents: 'all' }} d="M4762.31 635.75c0,0 -15.96,-146.38 214.9,-279.36" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_659017808">
                        <path style={{ pointerEvents: 'all' }} d="M2362.69 234.62c0,0 -436.93,-50.14 -136.09,866.73 0,0 -7.16,967.01 50.14,1060.13 57.3,93.12 222.05,623.18 336.66,386.8 0,0 -21.49,-988.49 186.24,-881.05 207.73,107.44 179.07,916.87 193.4,916.87 14.33,0 136.09,444.11 358.15,-823.75 0,0 -28.64,-408.29 7.17,-558.72 35.81,-150.43 372.48,-852.41 -136.1,-974.18 0,0 -343.82,71.64 -479.92,78.8 -136.1,7.16 -379.65,-71.63 -379.65,-71.63z" />
                        <path style={{ pointerEvents: 'all' }} d="M2377.02 1194.46c0,0 737.79,57.31 845.24,-35.81" />
                        <path style={{ pointerEvents: 'all' }} d="M2462.98 463.83c0,0 357.53,93.31 687.65,42.98" />
                        <path style={{ pointerEvents: 'all' }} d="M2735.17 664.4c0,0 50.13,-222.06 193.4,-293.69" />
                    </g>
                    <g onClick={() => handleDenteClick(1)} id="_659172120">
                        <path style={{ pointerEvents: 'all' }} d="M313.97 217.34c0,0 -436.96,64.47 -157.59,909.73 0,0 0,630.36 64.47,866.75 64.47,236.39 222.06,1131.8 379.65,-78.79 0,0 186.24,-680.51 336.67,14.32 0,0 14.33,494.26 57.31,558.73 42.98,64.47 200.57,-193.41 286.53,-444.12 85.96,-250.71 42.98,-386.8 64.47,-487.09 21.49,-100.29 -42.98,-479.94 100.28,-594.55 143.26,-114.61 186.25,-852.43 -293.69,-702 -479.94,150.43 -873.8,-32.55 -873.8,-32.55" />
                        <path style={{ pointerEvents: 'all' }} d="M356.95 1155.73c0,0 635.64,70.34 845.26,-42.98" />
                        <path style={{ pointerEvents: 'all' }} d="M457.24 432.24c0,0 415.46,114.62 673.34,78.8" />
                        <path style={{ pointerEvents: 'all' }} d="M707.95 597c0,0 19.35,-115.81 157.59,-207.74" />
                    </g>
                </svg>

            </div>
        </div >
    )
}
