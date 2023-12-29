import { Box, Typography } from '@mui/material'

const SectionHeading = ({ heading="", subheading="", color="neutral.darker" }) => {
  return (
    <Box textAlign={'center'}>
        <Typography component="h2" variant="h2" color={color} sx={{ fontWeight: 'fontWeightBold' }} textTransform="capitalize">{heading}</Typography>
        <Typography component="p" fontSize={16} width="45%" marginInline={'auto'} color="neutral.main">{subheading}</Typography>
    </Box>
  )
}

export default SectionHeading