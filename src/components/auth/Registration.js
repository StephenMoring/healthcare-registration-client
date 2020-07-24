import React, { useState } from 'react';
import { Grid, DialogContentText, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@material-ui/core';
import InputMask from "react-input-mask";

function Registration({open, onChange}){
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [npiNumber, setNpiNumber] = useState();
    const [businessAddress, setBusinessAddress] = useState();
    const [telephoneNumber, setTelephoneNumber] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [formError, setformError] = useState(false);

    const cancel = () => {
        console.log("Registration Canceled");
        setFirstName();
        setLastName();
        setNpiNumber();
        setBusinessAddress();
        setTelephoneNumber();
        setEmailAddress();
        setformError(false);
        onChange();
    }

    const registerNewProvider = () => {
        // only validation performed is ensuring fields are not empty
        if(!firstName || !lastName || !npiNumber || !businessAddress || !telephoneNumber || !emailAddress){
            setformError(true);
        } else {
            console.log('formError: ' + formError);
            const provider = {
                firstName: firstName,
                lastName: lastName,
                npiNumber: npiNumber,
                businessAddress: businessAddress,
                phoneNumber: telephoneNumber,
                emailAddress: emailAddress
            };
            saveNewProvider(provider);
            resetForm();
            onChange();
        }
        
    }

    const saveNewProvider = (provider) => {
        // make a call to a service class where I would post the provider 
        // to a backing webAPI, but for now I'll just console log it :)

        console.log(provider);
        console.log("New provider registered");
    }

    const resetForm = () => {
        setFirstName();
        setLastName();
        setNpiNumber();
        setBusinessAddress();
        setTelephoneNumber();
        setEmailAddress();
        setformError(false);
    }
    
    return(
        <Dialog open={open}>
            <DialogTitle id="form-dialog-title">Provider Registration</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To register as a provider this website, please enter the information requested here. We will send updates
                    as we process your registration.
                </DialogContentText>
                <form >
                    <div>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <TextField error={formError} required autoFocus label="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField error={formError} required label="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField 
                                error={formError}
                                required 
                                label="NPI Number" 
                                value={npiNumber} 
                                onChange={e => setNpiNumber(e.target.value)}
                                inputProps={{ maxLength: 10 }}/>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <InputMask
                                mask="999-999-9999"
                                value={telephoneNumber}
                                disabled={false}
                                maskChar=""
                                onChange={e => setTelephoneNumber(e.target.value)}
                                >
                                {() => <TextField error={formError} required label="Phone Number"/>}
                                </InputMask>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField error={formError} required fullWidth label="Email Address" value={emailAddress} onChange={e => setEmailAddress(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <TextField error={formError} required fullWidth label="Business Address" value={businessAddress} onChange={e => setBusinessAddress(e.target.value)}/>
                    </div>
                </form>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={cancel}>
                    Cancel
                </Button>
                <Button color="primary" onClick={registerNewProvider}>
                    Register
                </Button>
            </DialogActions> 
        </Dialog>
    )
}
export default Registration