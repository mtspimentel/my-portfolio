import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { linkedin: 'linkedin', linkedinicon: <FaLinkedinIn /> },
    { git: 'github', giticon: <FaGithub /> },
    { name: 'instagram', icon: <FaInstagram /> },
];

const SocialNetworks = () => {
    return (
    <section id="social-networks">
        {socialNetworks.map((networks) => (
        <a href="https://www.linkedin.com/in/mpimentel021/" className="social-btn1" id={networks.linkedin} key={networks.linkedin}>
            {networks.linkedinicon}
        </a>
        ))}
        
        {socialNetworks.map((networks) => (
        <a href="https://github.com/mtspimentel" className="social-btn2" id={networks.git} key={networks.git}>
            {networks.giticon}
        </a>

        
        
        ))}
        </section>
    );
};

export default SocialNetworks;