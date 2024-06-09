import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
// import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
import jewelLady from '/imgs/jewel-lady-3.jpg';
import jewel1 from "/imgs/jewel3.jpeg";

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Radiance Redefined: The Essence of Elegance',
  description:
    "Embrace the essence of elegance and let your beauty shine with our exquisite jewelry. Because true beauty isn't just seen, it's felt.",
  image: jewelLady,
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        id: "001",
        price: 24500,
        title: 'Blue Agate Hoops',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: jewel1,
        imageLabel: 'Image Text',
    },
    {
        id: "002",
        price: 11000,
        title: 'Ocean Ring',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: jewel1,
        imageLabel: 'Image Text',
    },
    {
        id: "003",
        price: 2500,
        title: 'Diamond Necklace',
        date: 'Nov 10',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: jewel1,
        imageLabel: 'Image Text',
    },
    {
        id: "004",
        price: 1200,
        title: 'Blue Agate Hoops',
        date: 'Nov 09',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: jewel1,
        imageLabel: 'Image Text',
    },
    {
        id: "0056",
        price: 3600,
        title: 'Ocean Rings',
        date: 'Nov 08',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: jewel1,
        imageLabel: 'Image Text',
    }
];

// const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Jewel Garden" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </Grid>
          {/*<Grid container spacing={5} sx={{ mt: 3 }}>*/}
            {/*<Main title="From the firehose" posts={posts} />*/}
            {/*<Sidebar*/}
            {/*  title={sidebar.title}*/}
            {/*  description={sidebar.description}*/}
            {/*  archives={sidebar.archives}*/}
            {/*  social={sidebar.social}*/}
            {/*/>*/}
          {/*</Grid>*/}
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
