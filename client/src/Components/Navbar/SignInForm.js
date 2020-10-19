import { Button, DialogActions, DialogContent, TextField } from '@material-ui/core';
import React, { Fragment, useState } from 'react';

export default function SignInForm() {
    const [username, setUsername] = useState(() => '');
    //const [password, setPassword] = useState('');
    //const [email, setEmail] = useState('');


    const SignIn = (e) => {
        e.preventDefault();
        alert("You're in !");
        try {
            console.log("Hello");
        } catch (err) {
            console.error(err);
        }
    }
    return (
        < Fragment >
            < form method="POST" onSubmit={e => SignIn(e)} >
                < DialogContent >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Input_1"
                        name="Input_Group_1"
                        label="User name"
                        type="text"
                        placeholder="Enter your User name here"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="Input_2"
                        name="Input_Group_1"
                        label="Password"
                        type="password"
                        fullWidth
                        placeholder="Enter Your Password here"
                    //value={password}
                    //onChange={e => setPassword(e.target.value)}
                    />

                </DialogContent >
                <DialogActions>
                    <Button color="primary">
                        Cancel
    </Button>
                    <Button type="submit" color="primary">
                        Sign In
    </Button>

                </DialogActions>
            </form >
        </Fragment >
    )
}
