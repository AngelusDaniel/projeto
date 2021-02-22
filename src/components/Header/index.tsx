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
            setNoticias(response.headers);

        };
        fetchData();
        
    }, []);

    return (
        <div className="container">
            <FaHome onClick={() => router.push("/")} />
            {noticias && noticias.map((item)=>{ 
            <Link key={item.id} href={`/${item.id}`}>
                {item.titulo}
            </Link>;
        })}
        </div>
    )

}

export default Header;