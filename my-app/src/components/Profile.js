import React from 'react';
import profileimg from '../img/profile-img.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Profile() {
  return (
    <div>
      <div className='d-flex flex-row'>
        <div className='profileImg'>
          <img src={profileimg} className="rounded float-start" alt="..." />
        </div>
        <div className='profileDetails'>
          <Box sx={{ padding: '30px', backgroundColor: 'white', borderRadius: '6px', }}>
            <div className='mb-1'><TextField className='textField' id="outlined-basic" label="Name" variant="outlined" /></div>
            <div className='mb-1'><TextField className='textField' id="outlined-basic" label="Email" variant="outlined" /></div>
            <div className='mb-1'><TextField className='textField' id="outlined-basic" label="Phone" variant="outlined" /></div>
            <Button variant="contained" href="#contained-buttons">Submit</Button>
          </Box>

        </div>
      </div>
    </div>
  )
}
