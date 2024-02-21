import {useState} from "react";
import {fetchWishList} from "../services/wishlistservice";

const SearchBox = ({setMyWishList}) => {

    const [searchTerm, setSearchTerm] = useState('');
   let onClickHandler = (e) => {
       e.preventDefault();
       console.log('e.target.value---',e.target.value);
       setMyWishList(fetchWishList().filter(item=>item.name.includes(searchTerm)));
    };

    return (
        <div>
            <form name={'submit form'}>
                <input onChange={(e)=> {
                    setSearchTerm(e.target.value);
                    console.log('----target value---',e.target.value);
                }} placeholder={'input search text'} name={'searchTerm'} aria-label={'search'}/>
                <button type={'submit'} onClick={onClickHandler}>Search</button>
            </form>
        </div>
    );
}

export default SearchBox;