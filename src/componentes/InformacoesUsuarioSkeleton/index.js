import React from "react";
import { View, Image } from "react-native";
import styles from "../InformacoesUsuario/styles";
import shimmerGif from '../../assets/shimmer.gif';

export function InformacoesUsuarioSkeleton() {
  return (
    <View style={styles.container}>
      <Image source={shimmerGif} style={[styles.foto, {overlayColor: '#FFF', borderRadius: 60}]} />
      <View style={styles.informacoes}>
        <Image source={shimmerGif} style={{overlayColor: '#FFF', width: 200, height: 25}} />
        <Image source={shimmerGif} style={{overlayColor: '#FFF', width: 200, height: 15, marginTop: 5}} />
      </View>
    </View>
  );
}
