import Menu from '../components/Menu';
import  {Jumbotron, Container} from 'reactstrap'
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
            <Container>
              
              <Image 
                src="/Public/TelaInicial.png"
                alt="Imagem"
                width={600}
                height={600}
              />
            </Container>
          </Jumbotron>

        </div>
        

    );
}

export default Home;
