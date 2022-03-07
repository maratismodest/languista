import React, {useEffect, useState} from 'react';
import {IWordDTO} from "../../models/WordDTO";
import './MyBase.css'

const MyBase = () => {
    const [words, setWords] = useState<IWordDTO[]>([])

    useEffect(() => {
        const base = localStorage.getItem('base')
        if (base) {
            setWords(JSON.parse(base))
        }
    }, [])

    const deleteWord = (id: number) => {
        const update = words.filter(x => x.id !== id)
        setWords(update)
    }
    return (
        <div>
            <ul>
                {words.map(({id, eng, rus}) => {
                    return (
                        <li key={id} className='MyBase'>
                            <h2>{id}</h2>
                            <p>{eng}</p>
                            <p>{rus}</p>
                            <button onClick={() => deleteWord(id)}>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default MyBase;