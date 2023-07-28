import { ImageBackground } from 'react-native';
import styles from './styles';

const imagemFundo = require('../../assets/fundo.png');

export function TelaDeFundo( { children } ) {
  return (
      <ImageBackground
        source={imagemFundo}
        style={styles.image}
        imageStyle={{
          opacity: 0.2,
          resizeMode: "cover",
          height: '70%',
        }}
      >
        {children}
      </ImageBackground>
  );
}
