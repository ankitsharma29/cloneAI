import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../resource/theme/color';
import Fonts from '../../resource/theme/font';

const index = () => {
  // {msg,data,time,sendData :right,receive data:right}
  const [senderMsg, setSenderMsg] = useState('');
  const [data, setData] = useState([
    {msg: 'Hello', sender: true, receiver: false, time: '10:20'},
    {msg: 'Hi Ram ', sender: false, receiver: true, time: '10:21'},
    {msg: 'How are you?', sender: true, receiver: false, time: '10:22'},
    {msg: 'I am fine.', sender: false, receiver: true, time: '10:25'},
    {
      msg: 'where are you from currently?.',
      sender: false,
      receiver: true,
      time: '10:25',
    },
    {
      msg: 'I am currently delhi.',
      sender: true,
      receiver: false,
      time: '10:26',
    },
    {msg: 'okay.', sender: false, receiver: true, time: '10:25'},
  ]);
  return (
    <View style={{flex: 1}}>
      {/* Header bar */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.blue1(),
          padding: 10,
        }}>
        <Text
          style={{
            color: Colors.white(),
            fontSize: 20,
            fontFamily: Fonts.poppinsBold,
          }}>
          Chat Screen
        </Text>
      </View>

      <View style={{flex: 1}}>
        <View style={{flex: 9}}>
          <ScrollView contentContainerStyle={{backgroundColor: Colors.white()}}>
            <FlatList
              data={data ?? []}
              renderItem={({item}) => {
                return (
                  <>
                    {item?.sender == true && (
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          alignItems: 'flex-end',
                          justifyContent: 'space-between',
                        }}>
                        <View></View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 10,
                          }}>
                          <View
                            style={{
                              margin: 15,
                              justifyContent: 'flex-end',
                              alignItems: 'flex-end',
                              backgroundColor: Colors.black4(),
                              borderRadius: 10,
                              borderWidth: 0.5,
                              padding: 10,
                            }}>
                            <Text
                              style={{
                                color: Colors.white(),
                                fontSize: 20,
                                fontFamily: Fonts.poppinsBold,
                              }}>
                              {item?.msg}
                            </Text>
                            <Text
                              style={{
                                color: Colors.white(),
                                fontSize: 15,
                                fontFamily: Fonts.poppinsBold,
                              }}>
                              {item?.time}
                            </Text>
                          </View>
                          <Image
                            style={{width: 30, height: 30, borderRadius: 20}}
                            resizeMode="cover"
                            source={require('../../assets/images/sender.jpg')}
                          />
                        </View>
                      </View>
                    )}
                    {item?.receiver == true && (
                      <>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 10,
                          }}>
                          <Image
                            style={{width: 20, height: 20, borderRadius: 10}}
                            resizeMode="cover"
                            source={require('../../assets/images/receiver.jpeg')}
                          />
                          <View
                            style={{
                              flex: 1,
                              flexDirection: 'row',
                              flexWrap: 'wrap',
                              alignItems: 'flex-end',
                              justifyContent: 'space-between',
                            }}>
                            <View
                              style={{
                                margin: 15,
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                backgroundColor: Colors.red(),
                                borderRadius: 10,
                                borderWidth: 0.5,
                                padding: 10,
                              }}>
                              <Text
                                style={{
                                  color: Colors.white(),
                                  fontSize: 20,
                                  fontFamily: Fonts.poppinsBold,
                                }}>
                                {item?.msg}
                              </Text>
                              <Text
                                style={{
                                  color: Colors.white(),
                                  fontSize: 15,
                                  fontFamily: Fonts.poppinsBold,
                                }}>
                                {item?.time}
                              </Text>
                            </View>
                            <View></View>
                          </View>
                        </View>
                      </>
                    )}
                  </>
                );
              }}
            />
          </ScrollView>
        </View>
        <View style={{margin: 10, flex: 2}}>
          <TextInput
            placeholder="enter msg"
            placeholderTextColor={Colors.black()}
            onChangeText={value => {
              console.log('value', value);

              setSenderMsg(value);
            }}
            style={{
              padding: 10,
              backgroundColor: Colors.white(),
              borderRadius: 10,
              borderWidth: 0.1,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: Colors.black(),
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              borderRadius: 10,
              margin: 20,
            }}
            onPress={() => {
              setData(prev => [
                ...prev,

                {
                  msg: senderMsg,
                  sender: true,
                  receiver: false,
                  time: '11:50',
                },
              ]);
              setSenderMsg('');
            }}>
            <Text
              style={{
                color: Colors.white(),
                fontSize: 15,
                fontFamily: Fonts.poppinsBold,
              }}>
              send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;
