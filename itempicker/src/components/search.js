import { useState } from 'react';
import styles from "./search.css";

export default function Search(props)
{
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        console.log(e.target.value);
//        props.onItemClick(e.target.value);
    };

    return (
        <div className={styles.searchContainer}>
            <input className={styles.search} title={""} value={searchInput} type="text"
            onChange={(e) => handleChange(e)}></input>
        </div>
    )
}