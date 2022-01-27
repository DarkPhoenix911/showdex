import * as React from 'react';
import cx from 'classnames';
import type { GroupBase, OptionProps } from 'react-select';
import type { DropdownOption } from './Dropdown';
import styles from './Dropdown.module.scss';

/* eslint-disable @typescript-eslint/indent */

export const SelectOption = <
  Option extends DropdownOption,
  Multi extends boolean,
  Group extends GroupBase<Option>,
>({
  innerRef,
  className,
  isFocused,
  isSelected,
  isDisabled,
  innerProps,
  children,
}: OptionProps<Option, Multi, Group>): JSX.Element => (
  <div
    ref={innerRef}
    className={cx(
      styles.option,
      isFocused && styles.focused,
      isSelected && styles.selected,
      isDisabled && styles.disabled,
      className,
    )}
    {...innerProps}
  >
    {children}
  </div>
);

/* eslint-enable @typescript-eslint/indent */
