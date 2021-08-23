// Animation
import {motion} from 'framer-motion';
import {pageAnimation,titleAnimation} from '../animation';
import styled from 'styled-components';

const Contact = () => {
    return(
        <StyledContact
            style={{background:'#fff'}}
            variants={pageAnimation}
            exit='exit'
            initial='hidden'
            animate='show'
        >
            <StyledTitle>
                <StyledHide>
                    <motion.h2 variants={titleAnimation}>Get In Touch.</motion.h2>
                </StyledHide>
            </StyledTitle>

            <div>
                <StyledHide>
                    <StyledSocial variants={titleAnimation}>
                        <StyledCircle />
                        <h2>Vouch For Us</h2>
                    </StyledSocial>
                </StyledHide>

                <StyledHide>
                    <StyledSocial variants={titleAnimation}>
                        <StyledCircle />
                        <h2>Send An Email</h2>
                    </StyledSocial>
                </StyledHide>

                <StyledHide>
                    <StyledSocial variants={titleAnimation}>
                        <StyledCircle />
                        <h2>Social Media</h2>
                    </StyledSocial>
                </StyledHide>
            </div>
        </StyledContact>
    );
};

const StyledContact = styled(motion.div)`
    padding:5rem 10rem;
    color: #353535;
    min-height: 90vh;

    @media(max-width : 1200px){
        padding:2rem;
        font-size: 1rem;
    }
`;

const StyledTitle = styled.div`
    margin-bottom:4rem;
    color: black;

    @media(max-width : 1200px){
        margin-top: 5rem;
    }
`;

const StyledHide = styled.div`
    overflow:hidden;
`;

const StyledCircle = styled.div`
    border-radius:50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;

const StyledSocial = styled(motion.div)`
    display: flex;
    align-items: center;

    h2{
        margin:2rem;
    }
`;

export default Contact;