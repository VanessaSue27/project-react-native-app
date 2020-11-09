import React, { useState } from 'react';
import { Share, Text, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const ShareScreen = () => {
  const [message, setMessage] = useState('');
  const [mood, setMood] = useState('');

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${message} Today's mood is: ${mood}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <MainScreenContainer>
          <RowImageContainer>
            <SingleImageContainer>
              <MoodImage source={require('../assets/crafty.png')} />
              <MoodButton onPress={() => setMood('Crafty')} style={{backgroundColor: mood === 'Crafty' ? "#99dddd" : "white"}}>
                <MoodButtonText>Crafty</MoodButtonText>
              </MoodButton>
            </SingleImageContainer>

            <SingleImageContainer>
              <MoodImage source={require('../assets/sunny.png')} />
              <MoodButton onPress={() => setMood('Sunny')} style={{backgroundColor: mood === 'Sunny' ? "#99dddd" : "white"}}>
                <MoodButtonText>Sunny</MoodButtonText>
              </MoodButton>
            </SingleImageContainer>
          </RowImageContainer>

          <RowImageContainer>
            <SingleImageContainer>
              <MoodImage source={require('../assets/active.png')} />
              <MoodButton onPress={() => setMood('Active')} style={{backgroundColor: mood === 'Active' ? "#99dddd" : "white"}}>
                <MoodButtonText>Active</MoodButtonText>
              </MoodButton>
            </SingleImageContainer>

            <SingleImageContainer>
              <MoodImage source={require('../assets/smiley.png')} />
              <MoodButton onPress={() => setMood('Smiley')} style={{backgroundColor: mood === 'Smiley' ? "#99dddd" : "white"}}>
                <MoodButtonText>Smiley</MoodButtonText>
              </MoodButton>
            </SingleImageContainer>
          </RowImageContainer>

          <Text>Enter your message here:</Text>
          <TextInput style={styles.inputField} placeholder="Enter some text here" multiline={true} onChangeText={text => setMessage(text)} value={message}/>
          <ShareButton onPress={onShare}>
            <ShareButtonText>SHARE</ShareButtonText>
          </ShareButton>
        </MainScreenContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

//Delete ShareScreen backup at the end

/*STYLED COMPONENTS AND STYLESHEETS*/
const MainScreenContainer = styled.View`
  flex: 1;
  padding-top: 20px
  background-color: white;
`;

const RowImageContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

const SingleImageContainer = styled.View`
  width: 180px;
  height: 180px;
  margin: auto;
`;

const MoodImage = styled.Image`
  width: 80%;
  height: 80%;
  margin: auto;
`;

const MoodButton = styled.TouchableOpacity`
  background: white;
  border: 2px solid black;
  width: 70px;
  padding: 4px;
  margin: auto;
`;

const MoodButtonText = styled.Text`
  color: black;
  text-align: center;
  font-weight: bold;
`;

const ShareButton = styled.TouchableOpacity`
  background: white;
  border: 2px solid #99dddd;
  width: 90px;
  padding: 10px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 70px;
`;

const ShareButtonText = styled.Text`
  color: #99dddd;
  text-align: center;
  font-weight: bold;
`;

const styles = StyleSheet.create({
  inputField: {
    height: 150,
    width: "70%",
    borderColor: "tomato",
    borderWidth: 2,
    margin: "auto"
  },
  /*Styling for ScrollView*/
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
  },
});
