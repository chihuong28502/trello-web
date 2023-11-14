import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
function Profiles() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ padding: 0 }}
                    aria-controls={open ? 'basic-menu-profiles' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar
                        src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/338697223_1516748275481535_6879214555229130855_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9BnoygcArkUAX95-Bt-&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDpgkMdxuTJFsVbtoQkP5g7dhIbut0D5Idr2oCzmtOBIQ&oe=6558B29F"
                        alt="ChiHuong28502"
                        sx={{ width: 34, height: 34 }}
                    />
                </IconButton>
            </Tooltip>
            <Menu
                id="basic-menu-profiles"
                aria-labelledby="basic-button-profiles"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>
                    <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
                </MenuItem>
                <MenuItem>
                    <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default Profiles;
