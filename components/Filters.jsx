import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RangeSlider from 'rn-range-slider';
import { useState, useCallback } from 'react';

import TextField from './ui/TextField'

import Thumb from './ui/slider/Thumb';
import Rail from './ui/slider/Rail';
import RailSelected from './ui/slider/RailSelected';
import Label from './ui/slider/Label';
import Notch from './ui/slider/Notch';


export default function Filters() {

    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(20);

    const renderThumb = useCallback(() => <Thumb/>, []);
    const renderRail = useCallback(() => <Rail/>, []);
    const renderRailSelected = useCallback(() => <RailSelected/>, []);
    const renderLabel = useCallback(value => <Label text={value}/>, []);
    const renderNotch = useCallback(() => <Notch/>, []);
    const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
    }, []);

    function logOutShit() {
        console.log(low, high);
    }

  return (
    <View>
      <TextField />
      <RangeSlider
        style={styles.slider}
        min={0}
        max={20}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
        onSliderTouchEnd={logOutShit}
    />
    </View>
  )
}

const styles = StyleSheet.create({})