import Box from '@mui/material/Box';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Chip from '@mui/material/Chip';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MENU_STYLES = {
    color: 'white',
    bgcolor: 'transparent',
    border: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
        color: 'white',
    },
    '&:hover': {
        bgcolor: 'primary.50',
    },
};

function BoardBar() {
    return (
        <Box
            sx={{
                paddingX: 2,
                width: '100%',
                height: (theme) => theme.trello.boardBarHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                overflowX: 'auto',
                '&::-webkit-scrollbar-track': {
                    m: 1,
                },
                bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
                borderBottom: '1px solid white',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Chip
                    sx={MENU_STYLES}
                    icon={<DashboardIcon />}
                    label="ChiHuong28502"
                    clickable
                />
                <Chip
                    sx={MENU_STYLES}
                    icon={<VpnLockIcon />}
                    label="Public/Private Workspace"
                    clickable
                />
                <Chip
                    sx={MENU_STYLES}
                    icon={<AddToDriveIcon />}
                    label="App To Google Drive"
                    clickable
                />
                <Chip
                    sx={MENU_STYLES}
                    icon={<BoltIcon />}
                    label="Automation"
                    clickable
                />
                <Chip
                    sx={MENU_STYLES}
                    icon={<FilterListIcon />}
                    label="App To Google Drive"
                    clickable
                />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': { borderColor: 'white' },
                    }}
                    variant="outlined"
                    startIcon={<PersonAddIcon />}
                >
                    Invite
                </Button>
                <AvatarGroup
                    max={7}
                    total={23}
                    sx={{
                        gap: '10px',
                        '& .MuiAvatar-root': {
                            width: '34px',
                            height: '34px',
                            fontSize: '16px',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            '&:first-of-type': { bgcolor: '#a4b0de' },
                        },
                    }}
                >
                    <Tooltip>
                        <Avatar
                            alt="chihuong28502"
                            src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/338697223_1516748275481535_6879214555229130855_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9BnoygcArkUAX95-Bt-&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDpgkMdxuTJFsVbtoQkP5g7dhIbut0D5Idr2oCzmtOBIQ&oe=6558B29F"
                        />
                    </Tooltip>
                    <Tooltip>
                        <Avatar
                            alt="chihuong28502"
                            src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/338697223_1516748275481535_6879214555229130855_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9BnoygcArkUAX95-Bt-&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDpgkMdxuTJFsVbtoQkP5g7dhIbut0D5Idr2oCzmtOBIQ&oe=6558B29F"
                        />
                    </Tooltip>
                    <Tooltip>
                        <Avatar
                            alt="chihuong28502"
                            src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/338697223_1516748275481535_6879214555229130855_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9BnoygcArkUAX95-Bt-&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDpgkMdxuTJFsVbtoQkP5g7dhIbut0D5Idr2oCzmtOBIQ&oe=6558B29F"
                        />
                    </Tooltip>
                </AvatarGroup>
            </Box>
        </Box>
    );
}

export default BoardBar;
