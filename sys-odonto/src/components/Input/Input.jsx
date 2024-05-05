import styles from './Input.module.css'


export default function Input({ label, value, onChange }) {
    return (
        <div>
            <label className={styles.label} for="inpt">{label}:</label>
            <input className={styles.input} type="text" id="inpt" />
        </div>
    );
}