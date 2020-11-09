import React, { useState } from 'react';
import { Share, Text, TextInput, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const ShareScreen = () => {
  const [message, setMessage] = useState('');
  const [mood, setMood] = useState('Happy');

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
    <MainScreenContainer>
      <RowImageContainer>
        <SingleImageContainer>
          <MoodImage source={require('../assets/crafty.png')} />
        </SingleImageContainer>

        <SingleImageContainer>
          <MoodImage source={require('../assets/sunny.png')} />
        </SingleImageContainer>
      </RowImageContainer>



      <Text>Enter your message here:</Text>
      <TextInput style={styles.inputField} placeholder="Enter some text here" multiline={true} onChangeText={text => setMessage(text)} value={message}/>
      <ShareButton onPress={onShare} mood={mood}>
        <ButtonText>SHARE</ButtonText>
      </ShareButton>
    </MainScreenContainer>
  );
};

//main View container must have marginTop minimum 50 so it does not hide behind top tab bar

/*STYLED COMPONENTS AND STYLESHEETS*/
const MainScreenContainer = styled.View`
  flex: 1;
  padding-top: 10px;
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

const ShareButton = styled.TouchableOpacity`
  background: white;
  border: 2px solid #99dddd;
  width: 90px;
  padding: 10px;
  margin: auto;
  margin-top: 50px;
`;

const ButtonText = styled.Text`
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
  }
});


// <img src="" style={{ border: mood === 'Dancing' ? "2px solid red" : "none" }}