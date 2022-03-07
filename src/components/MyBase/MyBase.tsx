import React, {useEffect, useState} from 'react';
import {IWordDTO} from "models/WordDTO";
import IconButton from '@mui/material/IconButton';

import './MyBase.scss'
import {CloseOutlined} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

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
    if (words.length === 0 ) {
        return null
    }
    return (
        <div className='MyBaseListWrap'>
            <Typography variant="h6" gutterBottom>Список моих слов</Typography>
            <ul className='MyBaseList'>
                {words.map(({id, eng, rus}, index) => {
                    return (
                        <li key={id} className='MyBase'>
                            <p>{eng}</p>
                            <p>{rus}</p>
                            <IconButton onClick={() => deleteWord(id)}>
                                <CloseOutlined/>
                            </IconButton>
                        </li>
                    )
                })}
            </ul>
        </div>

    );
};

export default MyBase;