import React, { useEffect, useRef, useState } from "react";

import UserList from "components/UserContainer/UserList";
import UserSearch from "components/UserContainer/UserSearch";

const filter = (data, term) => {
    if (term) {
        const result = data.find((d) => d.name.toLowerCase() === term || d.surname.toLowerCase() === term);
        const noResult = {};
        Object.keys(data[0]).map((k) => noResult[k] = '');
        return result ? [result] : [noResult];
    }
    return data;
};

const UserContainer = () => {
    const [data, setData] = useState(null);
    const usersRef = useRef();
    const getData = () => {
        fetch('/user.json')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    };
    useEffect(() => getData, []);
    const getSearch = (event) => {
        event.preventDefault();
        setData(filter(data, event.target[0].value));
    };
    if (!data) return <div>Waiting</div>;
    return(
        <div>
            <UserSearch onSearch={getSearch} onReset={getData} />
            <UserList data={data} ref={usersRef} />
        </div>
    );
};

export default UserContainer;
