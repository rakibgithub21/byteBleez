/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import placeholder from '../assets/404.jpg'


const BlogCard = ({ blog }) => {
    // console.log(blog);
    const { cover_image, title, description, published_at, id } = blog;
    return (
        <Link to={`/blog/${id}`} className="max-w-sm transition border-2 hover:scale-105 mx-auto group hover:no-underline border-primary hover:border-secondary border-opacity-30 focus:no-underline dark:bg-gray-900">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholder} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs dark:text-gray-400">{ new Date(published_at).toLocaleDateString()}</span>
                <p>{ description}</p>
            </div>
        </Link>
    );
};

export default BlogCard;