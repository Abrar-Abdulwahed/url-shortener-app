import {
	Card,
	Container,
	CardContent,
	Typography,
	Grid,
	Box,
	Divider,
    useTheme,
	useMediaQuery,
} from '@mui/material';
import SectionHeading from './SectionHeading';

const AdvancedStatistics = () => {
    const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
	const data = [
		{
			icon: 'icon-brand-recognition.svg',
			title: 'Brand Recognition',
			description:
				'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
		},
		{
			icon: 'icon-detailed-records.svg',
			title: 'Detailed Records',
			description:
				'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
		},
		{
			icon: 'icon-fully-customizable.svg',
			title: ' Fully Customizable ',
			description:
				' Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
		},
	];
	return (
		<Box bgcolor="neutral.lighter" paddingBlock={6}>
			<Container sx={{ position: 'relative' }}>
				<SectionHeading
					heading="advanced statistics"
					subheading="Track how your links are performing across the web with our advanced statistics dashboard"
				/>
				<Grid container paddingBlockStart={{ xs: 6 }} paddingBlock={{ sm: 10, md: 12 }} spacing={4}>
					{data.map((item, index) => (
						<Grid item key={item.icon} md={4} zIndex="10">
							<Card
								sx={{
                                    paddingInline:'30px',
									borderRadius: '5px',
									overflow: 'initial',
									bgcolor: 'white',
                                    marginBottom: '30px',
                                    '@media (min-width: 600px)': {
                                        transform: `translate(0, ${index * 40}px)`,
                                        marginBottom: '0',
                                    },
								}}
							>
								<Box
									height={60}
									width={60}
									borderRadius="50px"
									bgcolor="primary.dark"
									display="flex"
									alignItems="center"
									justifyContent="center"
                                    position='relative'
                                    top='50%'
                                    left='50%'
									sx={{
                                        transform: 'translate(-50%, -50%)',
										'@media (min-width: 960px)': {
                                            top: '0',
                                            left: '0',
											transform: 'translateY(-2rem)',
										},
									}}
								>
									<img src={item.icon} width={24} height={24} />
								</Box>
								<CardContent sx={{ padding: '0' }}>
									<Typography fontWeight='fontWeightBold' component="h3">
										{item.title}
									</Typography>
									<Typography fontSize='14px' color="neutral.main" sx={{ marginTop: 1 }}>
										{item.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
                <Divider
                    component="div"
                    orientation="vertical"
                    sx={{
                        position: isSmallScreen ? 'absolute' : 'relative',
                        backgroundColor: 'primary.main',
                        height: isSmallScreen ? '66%' : '4px',
                        width: isSmallScreen ? '4px' : 'initial',
                        left: isSmallScreen ? '50%' : '0',
                        top: '53%',
                        '@media (min-width: 900px)': {
                            top: '-15rem',
                        },
                        '@media (min-width: 960px)': {
                            top: '-13rem',
                        },
                        '@media (min-width: 1200px)': {
                            top: '-10rem',
                        },
                        zIndex: '0',
                        transform: isSmallScreen ? 'translate(-50%, -47%)' : 'translate(0)',
                    }}
                />
			</Container>
		</Box>
	);
};

export default AdvancedStatistics;
