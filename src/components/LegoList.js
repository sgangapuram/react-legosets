import React, {useEffect, useState} from 'react';
import {fetchWishList} from "../services/wishlistservice";
import LegoSet from "./LegoSet";
import SearchBox from "./SearchBox";

const LegoList = () => {

const [myWishList, setMyWishList] = useState([]);

    return (
        <div>
            <SearchBox setMyWishList={setMyWishList}></SearchBox>
        <div>{myWishList.map((wlItem) =>
            <LegoSet set={wlItem}/>)}
        </div>
        </div>
    );
}

export default LegoList;