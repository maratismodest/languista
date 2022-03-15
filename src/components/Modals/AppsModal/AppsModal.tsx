import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


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

    const [state, setState] = useState<string>('true')

    useEffect(() => {
        setTimeout(() => {
            const res = localStorage.getItem('links')
            if (res) {
                setState(JSON.stringify(res))
            }
            else {
                setState('')
            }
        }, 120000)

    }, [])
    const handleClose = () => {
        const date = new Date()
        localStorage.setItem('links', date.toString())
        setState( date.toString())
    }
    if (state) {
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
                <Button variant='contained' sx={{mt: 2}}
                        href={'https://play.google.com/store/apps/details?id=ru.languista.twa'}
                        onClick={handleClose}
                >
                    скачать в Google Play
                </Button>
                <Button variant='contained' sx={{mt: 4}}
                        href={'https://apps.apple.com/us/app/languista/id1614141051'}
                        onClick={handleClose}
                >
                    скачать в Apple Store
                </Button>

                <Button variant='contained' sx={{mt: 4}} onClick={handleClose}>
                    остаться на сайте
                </Button>
            </Box>
        </Modal>
    );
}
