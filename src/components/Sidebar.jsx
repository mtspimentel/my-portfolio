import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/eu2.jpeg'

import '../styles/components/sidebar.sass';



const Sidebar = () => {
    return (
        <aside id="sidebar">
        <img src={Avatar} alt="Matheus Pimentel" />
        <p className="title"> Desenvolvedor Front-end</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://drive.google.com/u/0/uc?id=1tfJDzeQnuHbLoXhie097ew1pAcwG-Ur8&export=download" className="btn"> Donwload curriculo</a>

    </aside>
    )
}

export default Sidebar