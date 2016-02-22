import React, { Component } from 'react';
import RadioGroup from 'react-radio-group';
import { connect } from 'react-redux';
import Capitalize from '../components/capitalize';
import { LENGTHS, selectLength, getSelectedLength  } from '../ducks/mission';

function createOptions(Radio) {
  const options = LENGTHS.map((length) => {
    return <span key={`length-option-${length}`}>
        <Radio id={length} value={length}/>
        <label htmlFor={length}>
          <Capitalize text={length}/>
        </label>
      </span>
  });

  return <div>{options}</div>
}

export function LengthSelector({selectedLength, selectLength}) {
  return <section className="length-selector centered">
    <h1>Length</h1>
    <RadioGroup name="length" selectedValue={selectedLength} onChange={selectLength}>
      {createOptions}
    </RadioGroup>
  </section>
}

export default connect(getSelectedLength, { selectLength })(LengthSelector);
