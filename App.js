import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>

      <TouchableOpacity
        onPress={() => setIsPopUpVisible(!isPopUpVisible)}
        style={{ backgroundColor: 'black', padding: 12, borderRadius: 16, marginTop: 16 }}>
        <Text style={{ color: 'white', fontSize: 24 }}>Open Model PopUp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setIsBottomSheetVisible(!isBottomSheetVisible)}
        style={{ backgroundColor: 'black', padding: 12, borderRadius: 16, marginTop: 16 }}>
        <Text style={{ color: 'white', fontSize: 24 }}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      {/* popUp Model */}
      <Modal visible={isPopUpVisible} transparent>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>

          <View style={{
            backgroundColor: 'white',
            height: 200,
            width: 300,
            alignContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
          }}>
            <Text style={{ color: 'black', fontSize: 24, marginTop: 50 }}>Helooo</Text>
            <Text style={{ color: 'black', fontSize: 24 }}>Helooo</Text>
            <TouchableOpacity
              onPress={() => setIsPopUpVisible(!isPopUpVisible)}
              style={{ backgroundColor: 'green', padding: 8, borderRadius: 16, marginTop: 16 }}>
              <Text style={{ color: 'white', fontSize: 24 }}>Submit</Text>
            </TouchableOpacity>

            <View style={{
              backgroundColor: 'blue',
              height: 100,
              width: 100,
              borderRadius: 100,
              position: 'absolute',
              top: -50
            }}></View>

          </View>

        </View>
      </Modal>

      {/* bottom sheet */}
      <Modal animationType='slide'
       visible={isBottomSheetVisible}
      transparent>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>

          <View style={{
            backgroundColor: 'white',
            height: 200,
            width: '100%',
            position:'absolute',
            bottom:0,
          }}>
            <Text style={{ color: 'black', fontSize: 24, marginTop: 24}}>Helooo</Text>
            <Text style={{ color: 'black', fontSize: 24 }}>Helooo</Text>
            <TouchableOpacity
              onPress={() => setIsBottomSheetVisible(!isBottomSheetVisible)}
              style={{ position:'absolute',right:16,top:8 }}>
              <Text style={{ color: 'red', fontSize: 24 }}>X</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>

    </View>
  )
}

export default App