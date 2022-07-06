import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormControl,
  FormGroup
} from '@material-ui/core';

const CheckBox = ({
  name,
  onChange,
  onBlur,
  value,
  inputLabel,
  isDisabled,
  identifier,
  className,
  error,
  isEditable,
  autoFocus,
  autoComplete,
  color,
  ariaLabel,
  role
}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing(3)
    }
  }));

  const classes = useStyles();

  const CheckBoxControl = (
    <Checkbox
      inputProps={{ 'aria-label': 'indeterminate checkbox' }}
      color={color}
      type="checkbox"
      name={name}
      defaultValue={value}
      disabled={isDisabled}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      className={`filled-in ${identifier}`}
      id={identifier}
      onChange={(event) => {
        onChange(event, { name, value: event.target.checked });
        return event.target.checked;
      }}
      onBlur={onBlur}
      aria-label={ariaLabel}
      role={role}
    />
  );

  const EditableView = (
    <FormControl
      error={!!error}
      component="fieldset"
      className={classes.formControl}
    >
      <FormGroup>
        <FormControlLabel
          control={CheckBoxControl}
          label={inputLabel}
          name={name}
          className={className}
        />
      </FormGroup>
      {!!error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
  const ReadonlyView = <span className="pre-wrap">{value ? 'Yes' : 'No'}</span>;

  return isEditable ? EditableView : ReadonlyView;
};

CheckBox.defaultProps = {
  isDisabled: false,
  className: '',
  color: 'primary',
  inputLabel: '',
  value: false,
  error: '',
  isEditable: true,
  onChange: () => {},
  onBlur: () => {},
  ariaLabel: null,
  role: null
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.bool,
  isDisabled: PropTypes.bool,
  identifier: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  inputLabel: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isEditable: PropTypes.bool,
  ariaLabel: PropTypes.string,
  role: PropTypes.string
};

export default CheckBox;
