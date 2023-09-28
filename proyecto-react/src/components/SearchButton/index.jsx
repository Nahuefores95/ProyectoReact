import { useRef } from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';


const SearchButton = () => {
    //Con useRef tomamos el valor del input
    //Validar lo que esta en el input, cantidad de letras por ejemplo
    //Ver si usamos submit o change
    //Usar el hook useHistory para poder enviar la info a otra page que sería (/results)
    let keyword = useRef();
    let history = useHistory();

    const handleSubmit = (event) =>{
        event.preventDefault();
        let word = keyword.current.value; 
        if(word.length < 3){
            swal({
                text:'La cantidad minima de caractes es 3',
                icon:'error'
            });
        }else{
            keyword.current.value = "";
            history.push(`/results?word=${word}`)
        }

    }
    

    return ( 
        <div className="col-lg-3 col-md-2 col-sm-2 header3">
            <form action="/search" method="GET" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="keyword" placeholder="Buscar" ref={keyword}/>
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div> 
     );
}
 
export default SearchButton;