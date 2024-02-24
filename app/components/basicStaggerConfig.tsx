export const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    }
  },
};

export const child = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const subContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  },
};
