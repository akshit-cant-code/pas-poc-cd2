import React from 'react';
import PropTypes from 'prop-types';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
} from '@material-ui/core';

const RadioButtonGroup = ({
  align,
  className,
  name,
  value,
  inputRef,
  onChange,
  onBlur,
  options,
  isEditable,
  dataValueField,
  dataTextField,
  error,
  identifier,
  label,
  labelPlacement,
  required,
  size,
  role,
}) => {
  const onRadioChange = (event) => {
    let selectedValue = event.target.value;
    const selectedOption = options.find(
      // eslint-disable-next-line eqeqeq
      (option) => option[dataValueField] == selectedValue
    );
    selectedValue = selectedOption ? selectedOption[dataValueField] : '';
    const params = { name, value: selectedValue, event, selectedOption };
    onChange(event, params);
    return selectedValue;
  };

  const RadioOptions = () => {
    return options.map((option) => {
      return (
        <Box className="radio-option-container" key={option[dataValueField]}>
          {option.labelPrefix && (
            <div className="label-prefix">{option.labelPrefix}</div>
          )}
          <div className="d-flex">
            <FormControlLabel
              value={option[dataValueField] || ''}
              control={<Radio color="primary" size={size} />}
              disabled={option.isDisabled}
              label={option[dataTextField]}
              labelPlacement={labelPlacement}
            />
          </div>
        </Box>
      );
    });
  };

  const EditableView = (
    <>
      <FormControl
        component="fieldset"
        error={!!error}
        className="radio-control"
        required={required}
      >
        <div className="radio-label">
          <FormLabel component="legend">
            <span>{label}</span>
          </FormLabel>
        </div>
        <RadioGroup
          ref={inputRef}
          row={align === 'horizontal'}
          aria-label={label}
          role={role}
          name={name}
          className={className}
          value={value || ''}
          id={identifier}
          onChange={onRadioChange}
          onBlur={onBlur}
          onFocus={() => inputRef?.current.focus()}
        >
          {RadioOptions()}
        </RadioGroup>

        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </>
  );

  const defaultValue = options.find(
    (option) => option[dataValueField] === value
  );
  const displayValue =
    dataTextField && value && options.length
      ? defaultValue && defaultValue[dataTextField]
      : '';
  const ReadonlyView = <span>{displayValue}</span>;

  return isEditable ? EditableView : ReadonlyView;
};

RadioButtonGroup.defaultProps = {
  align: 'vertical',
  dataValueField: 'id',
  dataTextField: 'name',
  className: '',
  isEditable: true,
  inputRef: null,
  required: false,
  error: null,
  value: null,
  label: null,
  onChange: () => {},
  onBlur: () => {},
  labelPlacement: 'end',
  size: 'medium',
  role: 'radio',
  options: [],
};

RadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isEditable: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  inputRef: PropTypes.shape({}),
  dataValueField: PropTypes.string,
  dataTextField: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string,
  rules: PropTypes.shape({}),
  control: PropTypes.shape({}),
  showInfoTooltip: PropTypes.bool,
  labelPlacement: PropTypes.string,
  size: PropTypes.string,
  onBlur: PropTypes.func,
  role: PropTypes.string,
};

export default RadioButtonGroup;
