import {useState,useEffect} from 'react';

const PropsChangeEffect = ({userId})=>{
    const [user,setUser] = useState(null);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res)=>res.json())
    },[userId])

    return();
}