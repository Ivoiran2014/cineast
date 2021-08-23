
export const pageAnimation = {
    hidden:{
        opacity:0,
        y:300
    },

    show:{
        opacity:1,
        y:0,
        transition:{
            duration : .5,
            when:'beforeChildren',
            staggerChildren:.25
        }
    },

    exit:{
        opacity:0,
        transition:{
            duration : .5,
        }
    }
}

export const titleAnimation = {
    hidden:{y:200},
    show:{
        y:0,
        transition: {duration:.75, ease:'easeOut'}
    }
};

export const fadeAnimation = {
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition: {ease:'easeOut', duration:.75}
    }
};

export const photoAnimation = {
    hidden:{scale:1.5,opacity:0},
    show:{
        scale:1,
        transition:{ease:'easeOut',duration:.75},
        opacity: 1
    }
};

export const lineAnimation = {
    hidden:{width:'0%'},
    show:{
        width:'100%',
        transition: {duration:1}
    }
};

export const frameAnimation = {
    hidden:{x:'-130%', skew:"45deg"},
    show:{
        x:'100%',
        skew:"0deg",
        transition: {ease:"easeOut", duration:1 }
    },
};

export const frameAnimationContainer = {
    hidden:{opacity:1},
    show:{
        opacity:1,
        transition: {staggerChildren:.15,ease:'easeOut'}
    }
};

export const scrollRevealAnimation = {
    hidden:{
        opacity:0,
        scale:1.2,
        transition: {duration:0.5}
    },
    show:{
        opacity:1,
        scale:1,
        transition: {duration:0.5}
    }
};