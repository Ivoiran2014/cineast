import home1 from '../images/home1.png';
import {StyledAbout,StyledDescription,StyledImage,StyledHide} from '../styles';
import {motion} from 'framer-motion';
// Animation
import {titleAnimation,fadeAnimation,photoAnimation} from '../animation';
import Wave from './Wave';

const AboutSection = () => {

    return(
        <StyledAbout>
            <StyledDescription>
                <motion.div>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>
                            We work to make
                        </motion.h2>
                    </StyledHide>

                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>

                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>
                            true.
                        </motion.h2 >
                    </StyledHide>

                </motion.div>

                <motion.p variants={fadeAnimation}>
                    Contact us for any photography or videography ideas that you have. We are professional with amaizing skills.
                </motion.p>
                <motion.button variants={fadeAnimation}>
                    Contact Us
                </motion.button>
            </StyledDescription>

            <StyledImage>
                <motion.img variants={photoAnimation} src={home1} alt="camera guy"/>
            </StyledImage>
            <Wave />
        </StyledAbout>
    );
};

export default AboutSection;