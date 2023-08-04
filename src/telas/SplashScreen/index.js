import {Text, View} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';

import splashAnimation from '../../assets/splash-aluramed.json';

export default function SplashScreen({navigation}) {
  function animationFinished() {
    console.log('end');
    navigation.navigate('Onboarding');
    // navigation.reset({ index: 0, routes: [{name: 'Onboarding'}] });
  }

  return (
    <View style={styles.container}>
      <LottieView
        style={{
          width: 400,
          height: 400,
        }}
        source={splashAnimation}
        autoPlay={true}
        onAnimationFinish={() => {
          animationFinished();
        }}
      />
    </View>
  );
}
