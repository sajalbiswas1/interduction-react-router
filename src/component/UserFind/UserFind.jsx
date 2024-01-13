import { useLoaderData } from "react-router-dom";


const UserFind = () => {
    const params = useLoaderData()
    const {name,website}=params
    return (
        <div>
            <h4>User name:{name}</h4>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserFind;