import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['J', 'u', 's', 't', 'i', 'n', ',']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 
                     'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => { 
            clearTimeout(timerId);
        };
    }, []);

    return (
        <>
        <div className="container home-page"> 
            <div className="text-zone"> 
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I'</span>
                    <span className={`${letterClass} _14`}>m&nbsp;</span>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    index={15} />
                    <br /> 
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    index={22} />
                </h1>
                <h2>Software Engineering Student at Stevens Institute of Technology</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
        <Loader type="ball-pulse-sync" />
        </>
    );
}

export default Home