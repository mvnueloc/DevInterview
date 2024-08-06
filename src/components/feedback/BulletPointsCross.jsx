import CrossIcon from '../icons/Cross';
import ReactMarkdown from 'react-markdown';

const BulletPoints = ({ points }) => {
    return (
        <ul className="w-full">
            {points.map((point, index) => (
                <li className="mt-2 w-full flex gap-2 text-base" key={index} >
                    <div className='w-3'>
                        <CrossIcon className="size-3 mt-1.5" color="#FF0000" />
                    </div>
                    <ReactMarkdown>{ point }</ReactMarkdown>
                </li>
            ))}
        </ul>
    )
};

export default BulletPoints;