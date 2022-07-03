export const animation = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -6,
    opacity: 0,
    display: 'none',
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
