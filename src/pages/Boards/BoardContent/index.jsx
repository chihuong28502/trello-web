import Box from '@mui/material/Box';

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      display: 'flex',
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
      alignItems: 'center',
      width: '100%',
    }}>
      Board Content
    </Box>
  )
}

export default BoardContent
