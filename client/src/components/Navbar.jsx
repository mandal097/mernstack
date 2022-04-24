import React, { useState } from 'react'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/system'
import GroupsIcon from '@mui/icons-material/Groups';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import AddIcon from '@mui/icons-material/Add';
import AddPost from './AddPost';
import { NavLink } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled('div')({
    backgroundColor: 'white',
    padding: "0 10px",
    borderRadius: '3px',
    width: '40%',
    height: '30px'
})
const Icons = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
})
const Userbox = styled(Box)({
    height: '30px',
    display: 'flex',
    gap: '10px'
})

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const [openProfile, setOpenProfile] = useState(false);

    return (
        <>
            <AppBar>
                <StyledToolbar>
                    <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                        <NavLink to='/' className='links color'>Amarnath</NavLink>
                    </Typography>
                    <GroupsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                    <Search>
                        <InputBase placeholder='search...' />
                    </Search>
                    <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
                        <Tooltip
                            sx={{ border: '2px solid white' }}
                            title="Create Post"
                            onClick={() => setOpen(true)}
                            className='cursor'
                        >
                            <AddIcon />
                        </Tooltip>
                        <Badge badgeContent={4} color="error" className='cursor'>
                            <EmailRoundedIcon color="white" />
                        </Badge>
                        <Badge badgeContent={2} color="error" className='cursor'>
                            <NotificationsNoneRoundedIcon color="white" />
                        </Badge>
                        <Avatar
                            sx={{ width: 35, height: 35 }}
                            alt="Cindy Baker" src='https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            onClick={() => setOpenProfile(true)}
                            className='cursor'
                        />
                    </Icons>
                    <Userbox sx={{ display: { xs: "block", sm: "none" } }} >
                        <Avatar
                            sx={{ width: 35, height: 35 }}
                            alt="Cindy Baker" src='https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            onClick={() => setOpenProfile(true)}
                            className='cursor'
                        />
                    </Userbox>
                </StyledToolbar>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    // anchorEl={anchorEl}
                    onClose={() => setOpenProfile(false)}
                    open={openProfile}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem><NavLink to='/profile' className='links'>Profile</NavLink></MenuItem>
                    <MenuItem><NavLink to='/' className='links'>My Account</NavLink></MenuItem>
                    <MenuItem><NavLink to='/' className='links'>Logout</NavLink></MenuItem>
                </Menu>
            </AppBar>
            {open &&
                <AddPost setOpen={setOpen} open={open} />
            }
        </>
    )
}

export default Navbar