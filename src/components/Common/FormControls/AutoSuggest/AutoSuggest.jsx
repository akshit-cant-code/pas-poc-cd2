import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  FormControl,
  FormHelperText,
  SvgIcon
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  helperText: {
    marginLeft: '14px'
  }
}));

const AutoSuggest = ({
  options,
  onChange,
  value,
  name,
  error,
  className,
  isEditable,
  dataTextField,
  dataValueField,
  identifier,
  disabled,
  required,
  label,
  onBlur,
  onInputChange,
  ariaLabel,
  freeSolo,
  role
}) => {
  const classes = useStyles();

  const defaultOption = options.find((option) => option[dataValueField] === value) || null;

  const [autoSuggestValue, setAutoSuggestValue] = useState(defaultOption);

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setAutoSuggestValue(defaultOption);
  }, [options, value]);

  const onSelectChange = (event, selectedOption) => {
    const selectedValue = selectedOption && selectedOption[dataValueField];

    const params = {
      name, value: selectedValue, event, selectedOption
    };

    onChange({ target: { name, value: selectedValue } }, params);

    setAutoSuggestValue(selectedOption);

    return selectedValue;
  };

  const ArrowDropDownIcon = () => {
    return (
      <SvgIcon viewBox="0 0 19 10" fill="none">
        <path
          d="M1.5 1.6L9.5 8.8"
          stroke="#4863FF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17.5 1.6L9.5 8.8"
          stroke="#4863FF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </SvgIcon>
    );
  };

  const EditableView = (
    <FormControl
      fullWidth
      className={classes.formControl}
      error={!!error}
      required={required}
      disabled={disabled}
    >
      <Autocomplete
        id={identifier}
        className={className}
        freeSolo={freeSolo}
        clearOnEscape
        inputValue={inputValue}
        options={options}
        value={autoSuggestValue}
        getOptionLabel={(option) => option[dataTextField]}
        aria-label={ariaLabel}
        role={role}
        getOptionSelected={(option, selectedOption) => {
          return option[dataValueField] === selectedOption[dataValueField];
        }}
        onChange={onSelectChange}
        popupIcon={ArrowDropDownIcon()}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          onInputChange(event, newInputValue);
        }}
        onBlur={onBlur}
        renderInput={(params) => {
          const paramsProps = {
            ...params,
            InputProps: { ...params.InputProps, disableUnderline: true }
          };

          return (
            <TextField
              {...paramsProps}
              label={label}
              variant="filled"
              error={!!error}
            />
          );
        }}
      />
      {error && (
        <FormHelperText className={classes.helperText}>{error}</FormHelperText>
      )}
    </FormControl>
  );
  const displayOption = options.find(
    (option) => option[dataValueField] === value
  );

  const displayValue = value && options.length
    ? displayOption && displayOption[dataTextField]
    : value;

  const ReadonlyView = <span>{displayValue}</span>;

  return isEditable ? EditableView : ReadonlyView;
};

AutoSuggest.defaultProps = {
  className: '',
  options: [],
  value: undefined,
  error: '',
  dataTextField: 'name',
  dataValueField: 'id',
  isEditable: true,
  required: false,
  freeSolo: false,
  label: 'Select',
  onChange: () => {},
  onBlur: () => {},
  onInputChange: () => {},
  ariaLabel: null,
  role: 'textbox'
};

AutoSuggest.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  identifier: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  dataTextField: PropTypes.string,
  dataValueField: PropTypes.string,
  isEditable: PropTypes.bool,
  required: PropTypes.bool,
  freeSolo: PropTypes.bool,
  label: PropTypes.string,
  onInputChange: PropTypes.func,
  ariaLabel: PropTypes.string,
  role: PropTypes.string
};

export default AutoSuggest;
