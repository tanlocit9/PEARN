import { Button, DialogActions, DialogContent, TextField } from '@material-ui/core';
import React, { useState } from 'react';

export default function SignUpContent() {
    const [open, setOpen] = useState(() => false);

    const handleClose = () => {
        setOpen(false);
    };
    const [username, setUsername] = useState(() => '');
    const [userpass, setUserpass] = useState(() => '');
    const [email, setEmail] = useState(() => '');


    const SignUp = async (e) => {
        e.preventDefault();
        try {
            const body = { username, userpass, email };
            console.log(body);
            const respone = await fetch("http://localhost:5000/api/user/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body, null, 1)
            });
            console.log(respone);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form method="POST" onSubmit={(e) => SignUp(e)}>
            < DialogContent >
                <TextField
                    autoFocus
                    margin="dense"
                    id="Input_3"
                    name="Input_Group_2"
                    label="Username"
                    type="text"
                    fullWidth
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="Input_5"
                    name="Input_Group_2"
                    label="Password"
                    type="password"
                    fullWidth
                    value={userpass}
                    onChange={e => setUserpass(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="Input_"
                    name="Input_Group_2"
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </DialogContent >
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
</Button>
                <Button onClick={handleClose} type="submit" color="primary">
                    Sign Up
</Button>
            </DialogActions>
        </form>
    )


}