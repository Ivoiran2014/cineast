import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';

export const useScroll = (duration = .3) => {
    const controls = useAnimation();
    const [element,view] = useInView({threshold:duration});

    if(view){
        controls.start('show');
    }else{
        controls.start('hidden');
    }

    return [element,controls];
};