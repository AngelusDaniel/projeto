import {useEffect, useState} from "react"
import {useRouter} from "next/router";
import {FaHome} from "react-icons/fa";
import {apiNoticia} from "../../api/data";
import {INoticia} from "../../interfaces/Noticia.interface";
import { Link } from "../../styles";




const Header= () => {
    const router = useRouter();
    const [noticias, setNoticias] = useState<INoticia[]>([]);
    useEffect(() =>{
        const fetchData = async () =>{
            const response = await apiNoticia.index();
            setNoticias(response.data);

        };
        fetchData();
        
    }, []);

    return (
        

        <div className="container">
            <FaHome onClick={() => router.push("/")} />
            
        
        </div>
    )
    
        

    

}

export default Header;