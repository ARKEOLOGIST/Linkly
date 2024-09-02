import { useState } from 'react'
import './Header.css'
import "@fontsource/inter";
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {

  return (
      <div className={"HeaderContainer"}>
        <div className={"HeadingText"}>Linkly</div>
        <div className={"HeaderBtnContainer"}>
          <div className={"HeaderLoginBtnContainer"}>
          <Button variant="outlined" className={"HeaderLoginBtn"}>
            <div>
              Login
            </div>
            <LogoutIcon/>
          </Button>
          </div>
          <div className={"HeaderRegisterBtnContainer"}>
          <Button variant="contained" className={"HeaderRegisterBtn"}>
            <div>
              Register Now
            </div>
          </Button>
          </div>
        </div>
      </div>
  )
}
