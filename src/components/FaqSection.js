import styled from 'styled-components';
import {StyledAbout} from '../styles';
// Animation
import Toggle from './Toggle';
import {AnimatePresence} from 'framer-motion';
import {scrollRevealAnimation} from '../animation';
import {useScroll} from './useScroll';

const FaqSection = () => {
    const [element,controls] = useScroll(.2);

    return (
        <StyledFaq 
            variants={scrollRevealAnimation} 
            ref={element} 
            animate={controls}
            initial='hidden'
        >
            <h2>Any questions <span>FAQ</span></h2>
            <AnimatePresence>
            <Toggle title='How Do I Start?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nesciunt.</p>
                </div>
            </Toggle>

            <Toggle title='What is your daily schedule?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nesciunt.</p>
                </div>
            </Toggle>

            <Toggle title='What are your Different Payment Method?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nesciunt.</p>
                </div>
            </Toggle>

            <Toggle title='What Products do you offer?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nesciunt.</p>
                </div>
            </Toggle>
            </AnimatePresence>

        </StyledFaq>
    );
};

const StyledFaq = styled(StyledAbout)`
    display: block;

    span{
        display : block;
    }

    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line{
        background : #cccccc;
        height : .2rem;
        margin : 2rem 0rem;
        width : 100%;
    }

    .question{
        padding : 3rem 0rem;
        cursor : pointer;
    }

    .answer{
        padding : 2rem 0rem;

        p{
            padding : 1rem 0rem;
        }
    }
`;

export default FaqSection;