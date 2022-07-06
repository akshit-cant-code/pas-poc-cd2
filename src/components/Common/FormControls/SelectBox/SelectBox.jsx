import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormHelperText,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  popover: {
    display: 'table',
    minHeight: '468px',
    zIndex: '1150 !important',
  },
  paper: {
    borderBottomRightRadius: '16px',
    borderBottomLeftRadius: '16px',
    marginTop: '-11px',
  },
  menuItem: {
    whiteSpace: 'normal',
  },
}));

const SelectBox = ({
  options,
  onChange,
  onBlur,
  value,
  name,
  error,
  className,
  isEditable,
  dataTextField,
  dataValueField,
  identifier,
  rules,
  label,
  defaultOption,
  title,
  control,
  disabled,
  required,
  inputRef,
  ariaLabel,
  role,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const onSelectChange = (event) => {
    let selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option[dataValueField] === selectedValue
    );
    selectedValue = selectedOption ? selectedOption[dataValueField] : '';
    const params = { name, value: selectedValue, event, selectedOption };
    onChange(event, params);
    return selectedValue;
  };

  const onIconButtonClick = () => {
    setOpen(!open);
  };

  const getStartAdornmentIcon = (option) => {
    const { startAdornment } = option;

    return (
      <img
        src={startAdornment.url}
        alt={startAdornment.alt}
        className="start-Adornment-img"
      />
    );
  };

  const SelectOptions = () => {
    const optionList = options.map((option, index) => (
      <MenuItem
        key={index}
        value={option[dataValueField]}
        className={classes.menuItem}
      >
        {option.startAdornment && getStartAdornmentIcon(option)}
        <span>{option[dataTextField]}</span>
      </MenuItem>
    ));

    if (defaultOption) {
      optionList.unshift(
        <MenuItem value="" key="defaultOption" className={classes.menuItem}>
          <em>{title}</em>
        </MenuItem>
      );
    }
    return optionList;
  };

  const EditableView = (
    <FormControl
      fullWidth
      className={classes.formControl}
      variant="filled"
      error={!!error}
      required={required}
      disabled={disabled}
    >
      <InputLabel id={`${identifier}_label`}>{label}</InputLabel>

      <Select
        IconComponent={ExpandMoreIcon}
        inputRef={inputRef}
        label={label}
        rules={rules}
        name={name}
        className={className}
        value={value || ''}
        labelId={`${identifier}_label`}
        aria-label={ariaLabel}
        role={role}
        id={identifier}
        open={open}
        onClose={onIconButtonClick}
        onOpen={onIconButtonClick}
        control={control}
        onChange={onSelectChange}
        onBlur={onBlur}
        onFocus={() => inputRef?.current.focus()}
        disableUnderline
        MenuProps={{
          PopoverClasses: {
            root: classes.popover,
          },
          classes: { paper: classes.paper },
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          elevation: 0,
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
        }}
      >
        {SelectOptions()}
      </Select>

      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
  const displayOption = options.find(
    (option) => option[dataValueField] === value
  );

  const displayValue =
    value && options.length
      ? displayOption && displayOption[dataTextField]
      : value;

  const ReadonlyView = <span>{displayValue}</span>;

  return isEditable ? EditableView : ReadonlyView;
};

SelectBox.defaultProps = {
  className: '',
  options: [],
  value: '',
  error: '',
  dataTextField: 'name',
  dataValueField: 'id',
  isEditable: true,
  rules: null,
  label: 'Select',
  title: 'Select',
  required: false,
  defaultOption: true,
  onChange: () => {},
  onBlur: () => {},
  control: {},
  inputRef: null,
  ariaLabel: 'select',
  role: 'option',
};

SelectBox.propTypes = {
  name: PropTypes.string.isRequired,
  inputRef: PropTypes.shape({}),
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
  rules: PropTypes.shape({}),
  control: PropTypes.shape({}),
  ariaLabel: PropTypes.string,
  role: PropTypes.string,
};

export default SelectBox;
