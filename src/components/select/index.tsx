'use client';

import { useState } from 'react';
import { SelectComponentProps, optionProps } from './@types';
import { classnames } from '@/utils';
import styles from './styles.module.scss';

import OptionsList from './components/options-list';
import SelectInput from './components/select-input';
import Label from './components/label';
import Feedback from './components/feedback';

export default function Select({
  label,
  name,
  options,
  selectedOption,
  state,
  feedback,
  onOptionSelect
}: SelectComponentProps): JSX.Element {
  const [showOptionsList, setShowOptionsList] = useState<boolean>(false);

  const handleOptionsList = () => setShowOptionsList(!showOptionsList);

  const handleSelectOption = (option: optionProps) => {
    const { value, disabled } = option;
    if (disabled) return;

    if (value !== selectedOption?.value) {
      onOptionSelect(option, name);
      handleOptionsList();
      return;
    }

    onOptionSelect(options[0], name);
    handleOptionsList();
  };

  return (
    <div className={styles.wrapper}>
      <Label>{label}</Label>

      <div className={classnames(styles.selectContainer, !state && styles.isInvalid)}>
        <SelectInput
          selectedOption={selectedOption}
          handleOptionsList={handleOptionsList}
        />

        <OptionsList
          showOptionsList={showOptionsList}
          handleSelectOption={handleSelectOption}
          selectedOptionValue={selectedOption?.value === undefined ? null : selectedOption.value}
          options={options}
        />
      </div>

      {!state && <Feedback>{feedback}</Feedback>}
    </div>
  );
}
