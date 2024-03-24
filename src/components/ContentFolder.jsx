import { useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown'

import placeholder from '../assets/404.jpg'
import rehypeRaw from "rehype-raw";

const ContentFolder = () => {
    const blog = useLoaderData();
    const { cover_image, title, description, published_at, tags,body_html } = blog;
    return (
        <div className=" border-2  mx-auto group hover:no-underline p-2  focus:no-underline dark:bg-gray-900">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholder} />
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-400">
                {
                    tags.map(tag => <a
                        key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900">#{tag}</a>)
                }
            </div>
            <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                
            </div>
        </div>
    );
};

export default ContentFolder;