import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {InformacoesUsuario} from '../../componentes/InformacoesUsuario';
import {CardConsulta} from '../../componentes/CardConsulta';
import {TelaDeFundo} from '../../componentes/TelaDeFundo';
import soniaFoto from '../../assets/sonia.png';
import pacientes from './pacientes';
import styles from './styles';
import {CardConsultaSkeleton} from '../../componentes/CardConsultaSkeleton';
import {InformacoesUsuarioSkeleton} from '../../componentes/InformacoesUsuarioSkeleton';

export default function Principal({navigation}) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 3000);
  }, []);

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        {showContent ? (
          <InformacoesUsuario
            nome="Olá Sônia"
            detalhes="Mais 4 consultas hoje"
            foto={soniaFoto}
          />
        ) : (
          <InformacoesUsuarioSkeleton />
        )}

        <Text style={styles.texto}>Hoje</Text>

        <FlatList
          data={pacientes}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detalhes', item)}>
              {showContent ? (
                <CardConsulta {...item} />
              ) : (
                <CardConsultaSkeleton />
              )}
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </TelaDeFundo>
  );
}
