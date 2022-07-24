import React from 'react';
import { 
    Typography,
    Container
} from '@mui/material';

const signatureStyle = {
    color: 'rgb(56, 11, 99)',
    padding: '2rem',
    fontSize: '.9rem',
    textAlign: 'center'
}

const Signature = () => {
    return (
        <Container>
            <Typography sx={signatureStyle}>
                &copy; {new Date().getFullYear()} samouchka
            </Typography>
        </Container>
    )
}

export default Signature;