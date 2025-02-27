import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import SvgUri from 'react-native-svg';

import Empty from '../assets/icons/empty.svg';
import Card from './ui/Card';
import Button from './ui/Button';

import Colors from '../constants/colors';
import GlobalLayout from '../constants/globalLayout';
import Typography from '../constants/typography';

export default function EmptyState() {
  return (
    <Card style={styles.emptyState}>
        <Empty />
      <Text style={Typography.h2}>Looks like you have no favorites</Text>
      <Button>Explore beers</Button>
    </Card>
  )
}

const styles = StyleSheet.create({
    emptyState:{
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "center",
        gap:16,
    }
})