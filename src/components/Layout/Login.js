import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login=({handleChange})=>{

    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");


    function Login(){
        var userDatas = [];

        userDatas = JSON.parse(localStorage.getItem("userDatas"));

        if(userDatas==null)
            userDatas = []

        for (let i = 0; i < userDatas.length; i++) {
            // const element = userDatas[i];

            
            if(userDatas[i].split("-")[0] == userName && userDatas[i].split("-")[1] == passWord){
                console.log(userDatas[i].split("-"))
                localStorage.setItem('category', "");
                localStorage.setItem('userName', userDatas[i].split("-")[0]);
                window.location.href = '/';
                // window.location.reload();
            }
            
        }
    }

    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField onChange={(e) => setUserName(e.target.value)} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField onChange={(e) => setPassWord(e.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button onClick={Login} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link  >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=> handleChange("event",1)} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;