import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../constants/colors';
import Typography from '../constants/typography';

import Card from '../components/ui/Card';
import Abv from '../components/Abv';
import BeerColor from '../components/BeerColor';
import Divider from '../components/ui/Divider';
import IBU from '../components/IBU';

export default function TitleCard({passedBeer}) {
  return (
        <Card style={styles.titleCard}>
            <View style={styles.titleTaglineDate}>
                <Text style={[Typography.h1, styles.title]}>{passedBeer.name}</Text>
                <Text style={Typography.h3}>{passedBeer.tagline}</Text>
                <Text style={[Typography.p2]}>First brewed: <Text style={{fontWeight: 700}}>{passedBeer.first_brewed}</Text></Text>
            </View>
                <Text style={Typography.p3}>{passedBeer.description}</Text>
                <Divider />
                <View style={styles.beerMeta}>
                  <Abv abv={passedBeer.abv} />
                  <IBU ibu={passedBeer.ibu} />
                  <BeerColor ebc={passedBeer.ebc} />
                </View>
        </Card>
  )
}

const styles = StyleSheet.create({
    
  titleCard:{
    gap:16
  },
  titleTaglineDate:{
    
  },
  title:{
    color: Colors.primaryGreen,
    flexShrink: 2
  },
 
  beerMeta:{
    flexDirection: "row",
    gap: 16,
    
    alignItems: "center",
    
  }
})