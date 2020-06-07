import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Header, Body } from 'native-base'

export default ({ history }) => {
  return(  
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem header>
            <Text>NativeBase</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                //Your text here
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>GeekyAnts</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
      
  )
};

const styles = StyleSheet.create({

  
})