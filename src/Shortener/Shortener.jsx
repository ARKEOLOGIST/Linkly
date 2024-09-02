import { useState } from 'react'
import './Shortener.css'
import "@fontsource/inter";
import { Button,Paper,TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

export default function Shortener() {
  const [link,setLink] = useState("");

  return (
      <div className={"ShortenerContainer"}>
        <div className={"ShortenerBody"}>
            <div className={"ShortenerText"}>
                Shorten Your Loooong Links :)
            </div>
            <div className={"ShortenerDescription"}>
                Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.
            </div>
            <div className={"ShortenerTextFieldContainer"}>
                <Paper className={"ShortenerTextPaper"}>
                <TextField variant="outlined" className={"ShortenerTextBox"}
                value={link}
                sx={{border: 'none', "& fieldset": { border: 'none' },}}
                placeholder="Enter the link here"
                onChange={(e) => {
                  setLink(e);
                }}
                slotProps={{
                  InputLabel: {
                    shrink: false,
                  },
                  input: {
                    style: {
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: '400',
                      border: 'none',
                      fontColor: '#C9CED6'
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <LinkOutlinedIcon/>
                      </InputAdornment>
                    )}}}>
                </TextField>
                <Button variant="contained" className={"ShortenerTextBtn"}>
                    Shorten Now!
                </Button>
                </Paper>
            </div>
        </div>
      </div>
  )
}
