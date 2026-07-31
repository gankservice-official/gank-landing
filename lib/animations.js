export const stampVariant = {
    hidden: {
        scale: 2,
        rotate: -8,
        opacity: 0,
    },
    visible: {
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            type: "spring",
            stiffness: 260,
            damping: 16,
        },
    },
};

export const slideUpVariant = {
    hidden: {
        y: 80,
        opacity: 0,
        rotate: 2,
    },
    visible: {
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export const slideLeftVariant = {
    hidden: {
        x: 80,
        opacity: 0,
        rotate: 3,
    },
    visible: {
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export const slideRightVariant = {
    hidden: {
        x: -80,
        opacity: 0,
        rotate: -3,
    },
    visible: {
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export const cardHover = {
    rest: {
        y: 0,
    },
    hover: {
        y: -8,
        transition: {
            duration: 0.2,
        },
    }, 
};

export const pulseCTA = {
    scale: [1, 1.03, 1],
    transition: {
        duration: 1.8,
        repeat: Infinity,
    },
};