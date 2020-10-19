import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function LoginDiaLog() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [content, setContent] = React.useState(<SignInForm />);
    const openSignIn = (e) => {
        e.preventDefault();
        setContent(<SignInForm />);
    }
    const openSignUp = (e) => {
        e.preventDefault();
        setContent(<SignUpForm />);
    }

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen}>
                Login
      </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth="true"
                style={{
                    minHeight: '80vh',
                    maxHeight: '80vh'
                }} >
                <DialogTitle id="form-dialog-title">
                    <Button onClick={e => openSignIn(e)} color="primary">
                        Sign In
                        </Button>
                    <Button onClick={e => openSignUp(e)} color="primary">
                        Sign Up
                        </Button>
                </DialogTitle>
                {content}
            </Dialog>
        </div >
    );
}
