import {
	Container,
	Box,
	Stack,
	Grid,
	Typography,
	Link as MuiLink,
} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
const Footer = () => {
	const navLinks = [
		{
			title: 'features',
			links: [
				{
					name: 'link shortening',
					path: '#',
				},
				{
					name: 'branded links',
					path: '#',
				},
				{
					name: 'analytics',
					path: '#',
				},
			],
		},
		{
			title: 'resources',
			links: [
				{
					name: 'blog',
					path: '#',
				},
				{
					name: 'developers',
					path: '#',
				},
				{
					name: 'support',
					path: '#',
				},
			],
		},
		{
			title: 'company',
			links: [
				{
					name: 'about',
					path: '#',
				},
				{
					name: 'our team',
					path: '#',
				},
				{
					name: 'careers',
					path: '#',
				},
				{
					name: 'contact',
					path: '#',
				},
			],
		},
	];

	interface ListHeadingProps {
		header: string;
	}

	interface ItemLink {
		path: string;
		name: string;
	}

	interface ListProps {
		header: string;
		links: ItemLink[];
	}

	interface ItemProps {
		itemLink: ItemLink;
	}

	const ListHeading: React.FC<ListHeadingProps> = ({ header }) => (
		<Typography
			component="h3"
			color="white"
			sx={{ mb: '16px', fontSize: 'inherit', fontWeight: 'fontWeightMedium' }}
		>
			{header}
		</Typography>
	);

	const Item: React.FC<ItemProps> = ({ itemLink }) => (
		<Typography
			component="li"
			sx={{ mb: '12px', fontSize: 'inherit', listStyleType: 'none' }}
		>
			<MuiLink href={itemLink.path} color="neutral.main">
				{itemLink.name}
			</MuiLink>
		</Typography>
	);

	const List: React.FC<ListProps> = ({ header, links }) => (
		<Typography
			component="ul"
			sx={{ fontSize: 'inherit', textTransform: 'capitalize', padding: '0' }}
		>
			<ListHeading header={header} />
			{links.map((itemLink) => (
				<Item key={itemLink.path} itemLink={itemLink} />
			))}
		</Typography>
	);
	return (
		<Box
			component={'footer'}
			paddingBlock={'30px'}
			fontSize={'12px'}
			bgcolor="neutral.darker"
		>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={4} lg={4}>
						<img
							src="/logo.svg"
							alt="url-shortener Logo"
							width={150}
							height={36}
							style={{ filter: 'brightness(0) invert(1)' }}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						sm={8}
						lg={4}
						display={'flex'}
						justifyContent={'space-between'}
						padding="0"
					>
						<List header={navLinks[0].title} links={navLinks[0].links} />
						<List header={navLinks[1].title} links={navLinks[1].links} />
						<List header={navLinks[2].title} links={navLinks[2].links} />
					</Grid>
					<Grid
						item
						xs={12}
						lg={4}
						padding="0"
						display={'flex'}
						justifyContent={'center'}
						sx={{ gap: '16px' }}
					>
						<MuiLink display={'block'} href="#">
							<FacebookIcon sx={{ color: 'white' }} />
						</MuiLink>
						<MuiLink display={'block'} href="#">
							<TwitterIcon sx={{ color: 'white' }} />
						</MuiLink>
						<MuiLink display={'block'} href="#">
							<PinterestIcon sx={{ color: 'white' }} />
						</MuiLink>
						<MuiLink display={'block'} href="#">
							<InstagramIcon sx={{ color: 'white' }} />
						</MuiLink>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
