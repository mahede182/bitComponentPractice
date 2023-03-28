import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Badge, Icon, withBadge, Divider,Card, Button } from '@rneui/themed';

const BadgedIcon = withBadge(15)(Icon);

const BadgeComponentPractice = () => {
return (
  <>
    <ScrollView>
    
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <Icon
          reverse
          name='ios-american-football'
          type='ionicon'
          color='#517fa4'
        />
        <Badge value="99+" status="error" />
        <Badge value="500" status="primary" />
        <Badge value="10" status="warning" />
        <View>
          <Avatar
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
            size="small"
          />
          <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: 5, left: 40 }}
          />
        </View>  
      </View>
      <Divider width={5}/>
      <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://lh3.googleusercontent.com/p/AF1QipNyiioe6hBYIfj9m56FaItzvkdxK0MEQBYEdXer=s1360-w1360-h1020',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit itaque culpa corporis praesentium, eos quam.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "#2089dc",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
}
})

export default BadgeComponentPractice;