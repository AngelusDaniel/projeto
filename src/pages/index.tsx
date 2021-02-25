import Menu from '../components/Menu';
import  {Jumbotron, Container, Button} from 'reactstrap'
import Head from 'next/head';
import Image from "next/image"
import 'styled-components';
import React from 'react';


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
          <div className="botao1">
          <Button   
                    size="lg"
                    block
                    outline color="danger"
                    href=""
                  >
                    NOTICIAS
                  </Button>
          </div>
          <style jsx>{`
        .botao1 {
          top: 0px;
          color: blue;
        }
        
      `}</style>


          <div className="botao2">
          <Button   
                    size="lg"
                    block
                    outline color="danger"
                    href=""
                  >
                    COMUNIDADE
                  </Button>
          </div>
          <style jsx>{`
        .botao2 {
          position: relative;
          top: 5px;
        }
       
      `}</style>

        </div>
        

    );
}

export default Home;
