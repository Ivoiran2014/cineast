import styled from "styled-components";
import {Link} from 'react-router-dom';
import athlete from '../images/athlete-small.png';
import goodtime from '../images/goodtimes-small.png';
import theracer from '../images/theracer-small.png';
// Animation
import {motion} from 'framer-motion';
import {
    pageAnimation,fadeAnimation,
    photoAnimation,lineAnimation,
    frameAnimation,frameAnimationContainer
} from '../animation';

import {useScroll} from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';


const OurWork = () => {

    const [firstElement,firstControls] = useScroll();
    const [secondElement,secondControls] = useScroll();

    return(
        <Work 
            style={{background:'#fff'}}
            variants={pageAnimation}
            exit='exit'
            initial='hidden'
            animate='show'
        >   
            <motion.div variants={frameAnimationContainer}>
                <StyledFrame1 variants={frameAnimation}></StyledFrame1>
                <StyledFrame2 variants={frameAnimation}></StyledFrame2>
                <StyledFrame3 variants={frameAnimation}></StyledFrame3>
                <StyledFrame4 variants={frameAnimation}></StyledFrame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <StyledHide>
                        <motion.img 
                            variants={photoAnimation}
                            src={athlete} alt="athlete" />
                    </StyledHide>
                </Link>
            </Movie>

            <Movie 
                variants={fadeAnimation} 
                animate={firstControls} 
                ref={firstElement}
                initial='hidden'>
                <h2>The Racers</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to='/work/the-racer'>
                    <img src={theracer} alt="racer" />
                </Link>
            </Movie>

            <Movie 
                variants={fadeAnimation} 
                animate={secondControls} 
                ref={secondElement}
                initial='hidden'>
                <h2>Good Times</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to='/work/good-times'>
                    <img src={goodtime} alt="good" />
                </Link>
            </Movie>
            <ScrollTop />
        </Work>
    );
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2{
        padding: 1rem 0rem;
    }

    @media(max-width : 1200px){
        padding:2rem 2rem;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 10rem;

    .line{
        height: .5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const StyledHide = styled.div`
    overflow: hidden;
`;

const StyledFrame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
    background: #ff8efb;
`;

const StyledFrame3 = styled(StyledFrame1)`
    background: #8ed2ff;
`;

const StyledFrame4 = styled(StyledFrame1)`
    background: #8effa0;
`;

export default OurWork;