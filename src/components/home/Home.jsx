import React from 'react'
import Intro from 'components/home/intro'
import Projects from 'components/home/projects'
import Skills from 'components/home/skills'
import Container from '@material-ui/core/Container'
import About from '../about/about'; // About компонентийг импортлох
import Education from '../education/education';



const Home = () => {
  return (
    <Container maxWidth="xl">
      <About />
      <Education />
      <Skills />
      <Projects />
    </Container>
  )
}

export default Home
