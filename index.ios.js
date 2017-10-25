import React, { Component } from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';
import { ARKit } from 'react-native-arkit';


export default class ReactNativeARKit extends Component {
  render() {
    let image = "http://nick.mtvnimages.com/nick/video/images/nick/spongebob-050-full-episode-16x9.jpg?maxdimension=&quality=0.60"
    return (
      <View style={{ flex: 1 }}>
        <ARKit
          style={{ flex: 1}}
          lightEstimation
          debug={true}
          onPlaneDetected={console.log} // event listener for plane detection
          onPlaneUpdate={console.log} // event listener for plane update
        >
          
         <ARKit.Model
            position={{ x: 0, y: 1.5, z: -.6, frame: 'local' }}
            eulerAngle={{ x: 0, y: 0, z: 0 }}
            model={{
              file: 'art.scnassets/head.dae',
              scale: 0.01,
            }}
          /><ARKit.Model
            position={{ x: 0.2, y: 1.5, z: -.6, frame: 'local' }}
            eulerAngle={{ x: 0, y: 0, z: 0 }}
            model={{
              file: 'art.scnassets/head.dae', 
              scale: 0.01,
            }}
          />
          <ARKit.Model
            position={{ x: 0.4, y: 1.5, z: -.6, frame: 'local' }}
            eulerAngle={{ x: 0, y: 0, z: 0 }}
            model={{
              file: 'art.scnassets/head.dae', 
              scale: 0.01,
            }}
          />
          <ARKit.Model
          position={{ x: 0.4, y: 1, z: -.6, frame: 'local' }}
          eulerAngle={{ x: 0, y: 0, z: 0 }}
          model={{
            file: 'art.scnassets/daniel.dae',
            scale: 0.01,
          }}
        />
          <ARKit.Model
            position={{ x: 0, y: 0, z: -.6, frame: 'local' }}
            eulerAngle={{ x: 1.5, y: -2, z: 0 }}
            model={{
              file: 'art.scnassets/jeffPic.dae', 
              scale: 0.01,
            }}
          />
        <ARKit.Model
            position={{ x: 0, y: 0, z: -.6, frame: 'local' }}
            eulerAngle={{ x: 1.3, y: -2, z: 0 }}
            model={{
              file: 'art.scnassets/angie.dae', 
              scale: 0.01,
            }}
          />
          <ARKit.Model
            position={{ x: 0, y: 0, z: -.6, frame: 'local' }}
            eulerAngle={{ x: 1.7, y: -2, z: 0 }}
            model={{
              file: 'art.scnassets/ship.scn', 
              scale: 0.01,
            }}
          />

          
        <ARKit.Sprite 
          position={{ x: 0, y: 0, z: 0 }} 
          ><Text> Text from ar sprite </Text></ARKit.Sprite>
          

         <ARKit.Text
            text="text from arkit text"
            position={{ x: 0.2, y: 0.6, z: 0,frame: 'local'  }}
            font={{ size: 0.15, depth: 0.05 }}
          />
        </ARKit>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeARKit', () => ReactNativeARKit);
//art.scnassets/head.psd   
//art.scnassets/head.dae

// art.scnassets/head.dae works!!!!

//             // <ARSprite position={{ x: 0, y: 0, z: -.6, frame: 'local' }}>
          // <Text> this is ar sprite </Text>
          // </ARSprite>

//           <ARKit.Box
//             position={{ x: 0, y: 0, z: 0 }}
//             shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 }}
//           />
//           <ARKit.Sphere
//             position={{ x: 0.2, y: 0, z: 0 }}
//             shape={{ radius: 0.05 }}
//           />
//           <ARKit.Cylinder
//             position={{ x: 0.4, y: 0, z: 0 }}
//             shape={{ radius: 0.05, height: 0.1 }}
//           />
//           <ARKit.Cone
//             position={{ x: 0, y: 0.2, z: 0 }}
//             shape={{ topR: 0, bottomR: 0.05, height: 0.1 }}
//           />
//           <ARKit.Pyramid
//             position={{ x: 0.2, y: 0.15, z: 0 }}
//             shape={{ width: 0.1, height: 0.1, length: 0.1 }}
//           />
//           <ARKit.Tube
//             position={{ x: 0.4, y: 0.2, z: 0 }}
//             shape={{ innerR: 0.03, outerR: 0.05, height: 0.1 }}
//           />
//           <ARKit.Torus
//             position={{ x: 0, y: 0.4, z: 0 }}
//             shape={{ ringR: 0.06, pipeR: 0.02 }}
//           />
//           <ARKit.Capsule
//             position={{ x: 0.2, y: 0.4, z: 0 }}
//             shape={{ capR: 0.02, height: 0.06 }}
//           />
//           <ARKit.Plane
//             position={{ x: 0.4, y: 0.4, z: 0 }}
//             shape={{ width: 0.1, height: 0.1 }}
//           />

 // <ARKit.Model
 //            position={{ x: -0.2, y: 0, z: 0, frame: 'local' }}
 //            model={{
 //              file: 'art.scnassets/ship.scn', // make sure you have the model file in the ios project
 //              scale: 0.01,
 //            }}
 //          />