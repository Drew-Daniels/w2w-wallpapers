import './Footer.css';
import { IconContext } from 'react-icons';
import { AiFillGithub as GitHubIcon } from 'react-icons/ai';
import { Container } from 'react-bootstrap';

export function Footer(props) {

  return (
    <Container fluid as='footer' className='footer d-flex flex-column py-5'>
      <Container as='a' id='github-link-project' className='d-flex justify-content-center' href='https://github.com/Drew-Daniels/w2w-wallpapers'>
        <IconContext.Provider value={{ size: '2em', alignSelf: 'center', color: '#007bff'}}>
          <GitHubIcon />
        </IconContext.Provider>
      </Container>
      <Container className='d-flex justify-content-center'>
        <span style={{ marginRight: '.25em' }}>Created by</span>
        <a id='github-link-profile' href='https://github.com/Drew-Daniels'>Drew Daniels</a>
      </Container>
    </Container>
  );
};
