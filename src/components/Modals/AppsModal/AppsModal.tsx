import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
};

export default function AppsModal() {

    const [links, setLinks] = useState<any>()

    useEffect(() => {
        const res = localStorage.getItem('links')
        if (res) {
            setLinks(JSON.stringify(res))
        }

    }, [])
    const handleClose = () => {
        console.log("handleClose")
        localStorage.setItem('links', 'true')
        setLinks('true')
    }
    if (links) {
        return null
    }
    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <a href="https://play.google.com/store/apps/details?id=ru.languista.twa">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        скачать в Google Play
                    </Typography>
                </a>
                <a href="https://apps.apple.com/us/app/languista/id1614141051">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        скачать в Apple Store
                    </Typography>
                </a>

                <Button variant='contained' sx={{mt: 2}} onClick={handleClose}>
                    OK
                </Button>
            </Box>
        </Modal>
    );
}
