const { LinearProgress, makeStyles } = MaterialUI;

const useStyles = makeStyles({
  root: {
    height: 5,
    borderRadius: 5,
  },
  bar: ({ props }) => ({
    borderRadius: 5,
    backgroundImage: `linear-gradient(90deg, rgba(74,211,255,1) 30% 
${props.value > 60 ? `,rgba(158,220,190,1) 60%` : ""} 
${props.value > 85 ? `,rgba(255,171,0,1) 90%` : ""} 
${props.value > 95 ? `,rgba(255,0,0,1) 100%` : ""})`,
  }),
});

const ProgressBartemp = (props) => {
  const classes = useStyles({ props });

  return (
    <LinearProgress
      {...props}
      classes={{ root: classes.root, bar: classes.bar }}
    >
      <p>{progress}</p>
    </LinearProgress>
  );
};

export default ProgressBartemp;
