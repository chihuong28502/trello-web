import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import WorkSpaces from './Menus/WorkSpaces';
import Recent from './Menus/Recent';
import Templates from './Menus/Templates';
import Starred from './Menus/Starred';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from './Menus/Profiles';
function AppBar() {
    return (
        <Box
            px={2}
            sx={{
                width: '100%',
                height: (theme) => theme.trello.appBarHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AppsIcon sx={{ color: 'primary.main' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <SvgIcon
                        fontSize="small"
                        component={TrelloIcon}
                        inheritViewBox
                        sx={{ color: 'primary.main' }}
                    />
                    <Typography
                        variant="span"
                        sx={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'primary.main',
                        }}
                    >
                        Trello
                    </Typography>
                </Box>
                <WorkSpaces></WorkSpaces>
                <Recent></Recent>
                <Starred></Starred>
                <Templates></Templates>
                <Button variant="outlined">Create</Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <TextField
                    id="outlined-search"
                    label="Search..."
                    size="small"
                    type="search"
                />
                <ModeSelect />
                <Tooltip title="Notification" sx={{ cursor: 'pointer' }}>
                    <Badge color="secondary" variant="dot">
                        <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
                    </Badge>
                </Tooltip>
                <Tooltip title="Help" sx={{ cursor: 'pointer' }}>
                    <HelpOutlineIcon sx={{ color: 'primary.main' }} />
                </Tooltip>
                <Profiles />
            </Box>
        </Box>
    );
}

export default AppBar;
