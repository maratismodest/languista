import React, {useState} from 'react';
import {Grid, Input} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Add = () => {
    const [eng, setEng] = useState('')
    const [rus, setRus] = useState('')
    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(eng, rus)
        const base = localStorage.getItem('base')
        if (!base) {
            return
        }
        const prev = JSON.parse(base);
        const res = [...prev, {
            id: prev.length,
            eng,
            rus
        }]
        localStorage.setItem('base', JSON.stringify(res))
        setEng('')
        setRus('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography align='center' variant="h2" gutterBottom>ADD</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Input required placeholder='English' fullWidth value={eng} onChange={e => setEng(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <Input required placeholder='Russian' fullWidth value={rus} onChange={e => setRus(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <Button type='submit' variant='contained' fullWidth>ADD</Button>
                </Grid>

            </Grid>
        </form>
    );
};

export default Add;