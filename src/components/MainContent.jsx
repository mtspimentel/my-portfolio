import '../styles/components/maincontent.sass'
import ProjectsContainer from './ProjectsContainer'
import TecnologiesContainer from './TechnologiesContainer'
import AboutContainer from './AboutContainer'

const MainContent = () => {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TecnologiesContainer />
            <ProjectsContainer />
            
        </main>
    )
}

export default MainContent