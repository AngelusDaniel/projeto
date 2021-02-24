import Menu from '../components/Menu';
import  {Jumbotron, Container, Button} from 'reactstrap'
import Head from 'next/head';
import Image from "next/image"

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>
          <Head>
            <title> PVnoticias </title>
          </Head> 
          <Menu />
          <Jumbotron>
            <Container className='text-center'>
              
              <Image className="imgprinci"
                src="/TelaInicial.png"
                alt="Imagem"
                width={550}
                height={125}
              />
            </Container>
          </Jumbotron>
          <div>
          <Button   
                    size="lg"
                    block
                    outline color="danger"
                    href=""
                  >
                    NOTICIAS
                  </Button>
          </div>
          <div>
          <Button   
                    size="lg"
                    block
                    outline color="danger"
                    href=""
                  >
                    COMUNIDADE
                  </Button>
          </div>

        </div>
        

    );
}

export default Home;
