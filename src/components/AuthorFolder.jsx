import { useLoaderData } from "react-router-dom";


const AuthorFolder = () => {
    const blog = useLoaderData()
    return (
        <div>
            <h1>{blog.user.name}</h1>
        </div>
    );
};

export default AuthorFolder;