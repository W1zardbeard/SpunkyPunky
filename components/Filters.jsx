import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import RangeSlider from 'rn-range-slider';
import Colors from '../constants/colors';
import Typography from '../constants/typography';
import TextField from './ui/TextField';
import Thumb from './ui/slider/Thumb';
import Rail from './ui/slider/Rail';
import RailSelected from './ui/slider/RailSelected';
import Label from './ui/slider/Label';
import Notch from './ui/slider/Notch';

export default function Filters({
  onAbvChange,
  onIBUChange,
  abvLow,
  abvHigh,
  IBULow,
  IBUHigh,
  setAbvLow,
  setAbvHigh,
  setIBULow,
  setIBUHigh,
}) {
  

   const [localAbvLow, setLocalAbvLow] = useState(abvLow);
    const [localAbvHigh, setLocalAbvHigh] = useState(abvHigh);
    const [localIBULow, setLocalIBULow] = useState(IBULow);
    const [localIBUHigh, setLocalIBUHigh] = useState(IBUHigh);

  const renderThumbAbv = useCallback(() => <Thumb />, []);
  const renderRailAbv = useCallback(() => <Rail />, []);
  const renderRailSelectedAbv = useCallback(() => <RailSelected />, []);
  const renderLabelAbv = useCallback(value => <Label text={value} />, []);
  const renderNotchAbv = useCallback(() => <Notch />, []);
  const handleValueChangeAbv = useCallback((low, high) => {
    setLocalAbvLow(low);
    setLocalAbvHigh(high);
  }, [setAbvLow, setAbvHigh]);

  const renderThumbIBU = useCallback(() => <Thumb />, []);
  const renderRailIBU = useCallback(() => <Rail />, []);
  const renderRailSelectedIBU = useCallback(() => <RailSelected />, []);
  const renderLabelIBU = useCallback(value => <Label text={value} />, []);
  const renderNotchIBU = useCallback(() => <Notch />, []);
  const handleValueChangeIBU = useCallback((low, high) => {
    setLocalIBULow(low);
    setLocalIBUHigh(high);
  }, [setIBULow, setIBUHigh]);

  return (
    <View>
      <TextField />
      <View style={styles.inputField}>
        <Text style={[Typography.h3, styles.label]}>ABV (in %)</Text>
        <RangeSlider
          style={styles.slider}
          min={0}
          max={20}
          step={1}
          floatingLabel
          renderThumb={renderThumbAbv}
          renderRail={renderRailAbv}
          renderRailSelected={renderRailSelectedAbv}
          renderLabel={renderLabelAbv}
          renderNotch={renderNotchAbv}
          onValueChanged={handleValueChangeAbv}
          onSliderTouchEnd={() => onAbvChange(localAbvLow, localAbvHigh)}
        />
        <View style={styles.rangeLabels}>
          <Text style={[styles.label, Typography.h3]}>{abvLow}%</Text>
          <Text style={[styles.label, Typography.h3]}>{abvHigh}%</Text>
        </View>
      </View>

      <View style={styles.inputField}>
        <Text style={[Typography.h3, styles.label]}>IBU (Bitterness %)</Text>
        <RangeSlider
          style={styles.slider}
          min={0}
          max={100}
          step={1}
          floatingLabel
          renderThumb={renderThumbIBU}
          renderRail={renderRailIBU}
          renderRailSelected={renderRailSelectedIBU}
          renderLabel={renderLabelIBU}
          renderNotch={renderNotchIBU}
          onValueChanged={handleValueChangeIBU}
          onSliderTouchEnd={() => onIBUChange(localIBULow, localIBUHigh)}
        />
        <View style={styles.rangeLabels}>
          <Text style={[styles.label, Typography.h3]}>{IBULow}%</Text>
          <Text style={[styles.label, Typography.h3]}>{IBUHigh}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    gap: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  label: {
    color: Colors.black,
  },
  rangeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
});