import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Line from "../Graph/Line";
import { AlignHorizontalRightRounded } from "@mui/icons-material";
import { center } from "underscore.string";
import { padding } from "@mui/system";
import Point from "../Graph/Point";
const defaultValues = {
  name: "",
  Graph: Line,
};
const Form = (props) => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.parentCallback(formValues);
  };
  return (
    <form onSubmit={handleSubmit} style={{ height: 70 / 1, padding: 10 }}>
      <Grid container sx={{ height: 900 / 1 }}>
        <Grid></Grid>

        <Grid item xs={29} sm={10} md={10} sx={{ height: 900 / 1 }}>
          <TextField
            InputLabelProps={{
              style: { color: "white" },
              height: 700,
              input: {
                color: "white",
              },
            }}
            inputProps={{
              style: {
                fontFamily: "nunito",
                color: "white",
              },
            }}
            id="name-input"
            name="name"
            label="Query To Run"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={9} sm={1} md={1} style={{ padding: 20 / 1 }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ height: 25, backgroundColor: "rgb(160, 5, 177)" }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default Form;
