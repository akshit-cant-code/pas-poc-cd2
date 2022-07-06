import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const TextInput = ({
  name,
  inputRef,
  onChange,
  placeholder,
  value,
  type,
  error,
  isDisabled,
  identifier,
  autoComplete,
  className,
  autoFocus,
  isEditable,
  inputVariant,
  inputLabel,
  inputProps,
  inputComponentProps,
  fullWidth,
  required,
  maxLength,
  isPasteAllowed,
  isCutAllowed,
  isCopyAllowed,
  onKeyDown,
  onPaste,
  onBlur,
  onFocus,
  endAdornment,
  ariaLabel,
  role
}) => {
  const onTextFieldPaste = (e) => {
    if (isPasteAllowed) {
      onPaste(e);
    } else {
      e.preventDefault();
    }

    return e;
  };

  const onCut = (e) => (isCutAllowed ? e : e.preventDefault());
  const onCopy = (e) => (isCopyAllowed ? e : e.preventDefault());

  const EditableView = (
    <TextField
      error={!!error}
      variant={inputVariant}
      helperText={error}
      name={name}
      type={type}
      label={inputLabel}
      aria-label={ariaLabel}
      role={role}
      placeholder={placeholder}
      value={value || ''}
      inputProps={{ ...inputProps, maxLength }}
      disabled={isDisabled}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      onPaste={onTextFieldPaste}
      onCut={onCut}
      onCopy={onCopy}
      onBlur={onBlur}
      onFocus={onFocus}
      fullWidth={fullWidth}
      className={className}
      onKeyDown={onKeyDown}
      id={identifier}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      InputProps={{
        disableUnderline: true,
        endAdornment,
        ...inputComponentProps
      }}
      required={required}
      inputRef={inputRef}
      onChange={(event) => {
        if (!maxLength || event.target.value.length <= maxLength) {
          onChange(event, { name, value: event.target.value });
        }

        return event.target.value;
      }}
    />
  );
  const ReadonlyView = <span className="pre-wrap">{value}</span>;

  return isEditable ? EditableView : ReadonlyView;
};

TextInput.defaultProps = {
  placeholder: null,
  value: undefined,
  error: null,
  type: 'text',
  maxLength: null,
  isDisabled: false,
  className: 'form-control',
  autoComplete: 'off',
  autoFocus: false,
  isEditable: true,
  inputRef: null,
  inputVariant: 'filled',
  inputLabel: null,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  fullWidth: true,
  required: false,
  isPasteAllowed: true,
  isCopyAllowed: true,
  isCutAllowed: true,
  onKeyDown: () => {},
  onPaste: () => {},
  endAdornment: null,
  inputComponentProps: {},
  ariaLabel: 'input',
  role: 'textbox'
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.number,
  value: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  type: PropTypes.string,
  maxLength: PropTypes.number,
  isDisabled: PropTypes.bool,
  identifier: PropTypes.string.isRequired,
  className: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  isEditable: PropTypes.bool,
  inputRef: PropTypes.shape({}),
  inputLabel: PropTypes.string,
  inputVariant: PropTypes.string,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  isPasteAllowed: PropTypes.bool,
  isCopyAllowed: PropTypes.bool,
  isCutAllowed: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onPaste: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  endAdornment: PropTypes.shape({}),
  ariaLabel: PropTypes.string,
  role: PropTypes.string,
  inputComponentProps: PropTypes.shape({})
};

export default TextInput;
