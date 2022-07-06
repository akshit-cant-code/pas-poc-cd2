import React from 'react';
import { PropTypes } from 'prop-types';
import {
  ButtonGroup as ButtonGroupControl,
  Button,
  FormControl,
  FormHelperText
} from '@material-ui/core';

const ButtonGroup = ({
  identifier,
  options,
  dataTextField,
  dataValueField,
  variant,
  color,
  type,
  size,
  ariaLabel,
  disabled,
  value,
  onChange,
  onBlur,
  name,
  className,
  orientation,
  error,
  required,
  fullWidth,
  role
}) => {
  const onButtonChange = (event, option) => {
    const params = { name, value: option[dataValueField] };

    onChange({ target: params }, params, event);

    return option;
  };

  const buttonOptions = () => {
    return options.map((option, index) => (
      <Button
        key={index}
        color={option[dataValueField] === value ? 'primary' : color}
        onClick={(e) => onButtonChange(e, option)}
        onBlur={onBlur}
      >
        {option[dataTextField]}
      </Button>
    ));
  };

  return (
    <FormControl fullWidth={fullWidth} error={!!error} variant="filled" required={required}>
      <ButtonGroupControl
        id={identifier}
        disableElevation
        orientation={orientation}
        variant={variant}
        type={type}
        size={size}
        color={color}
        aria-label={ariaLabel}
        disabled={disabled}
        className={className}
        fullWidth={fullWidth}
        role={role}
      >
        {buttonOptions()}
      </ButtonGroupControl>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

ButtonGroup.defaultProps = {
  identifier: 'buttonGroup',
  options: [],
  dataTextField: 'name',
  dataValueField: 'id',
  variant: 'contained',
  color: 'inherit',
  type: 'button',
  orientation: 'horizontal',
  size: 'large',
  ariaLabel: 'button group',
  disabled: false,
  value: null,
  className: null,
  onChange: () => {},
  onBlur: () => {},
  error: null,
  fullWidth: true,
  required: false,
  role: 'button'
};

ButtonGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  dataTextField: PropTypes.string,
  dataValueField: PropTypes.string,
  name: PropTypes.string.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  orientation: PropTypes.string,
  identifier: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  role: PropTypes.string
};

export default ButtonGroup;
