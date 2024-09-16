import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';

import ModalEmConstrucao from '../Modal/modal';

export default function CadastroAcompanhante({navigation}) {
  const [modalVisible, setModalVisible] = useState(false)

  function chamarModal(){
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1.5, alignItems: 'center', justifyContent: 'center', alignItems: 'center', columnGap: 65,
      }}>
        <Image style={styles.logo}  source={require('../Imagens/Logo-sem-fundo e sem letra 2.png')}></Image>
      </View>
      <View style={{flex: 1, alignItems: 'center', marginTop: '-8%'}}>
        <Text style={styles.textoCadatro}>Cadastre-se:</Text>
      </View>
      <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'center', columnGap: 20}}>
      <TextInput style={{
                    paddingLeft: 10,
                    fontSize: 20, 
                    width: '40%', 
                    height: '75%',
                    borderRadius: 5,
                    borderLeftWidth: 2,
                    borderTopWidth: 2,
                    borderRightWidth: 2,
                    borderBottomWidth: 2,
                    borderColor: 'white',
                    color: 'white'}} 
                    placeholder='Nome'
                    placeholderTextColor = "white"
        />
        <TextInput style={{
                    paddingLeft: 10,
                    fontSize: 20, 
                    width: '40%', 
                    height: '75%',
                    borderRadius: 5,
                    borderLeftWidth: 2,
                    borderTopWidth: 2,
                    borderRightWidth: 2,
                    borderBottomWidth: 2,
                    borderColor: 'white'
        }} 
          placeholder='Sobrenome'
          placeholderTextColor = "white"
        />
      </View>
      <View style={{flex: 2, alignItems: 'center', }}>
      <TextInput style={styles.input}  
        placeholder='Telefone'
        placeholderTextColor = "white"
      />
      <TextInput style={styles.input} 
        placeholder='Email'
        placeholderTextColor = "white"
      />
      <TextInput style={styles.input}  
        placeholder='Usuário'
        placeholderTextColor = "white"
      />
      <TextInput style={styles.input} 
        placeholder='Senha'
        placeholderTextColor = "white"
        secureTextEntry={true}
      />
      </View>
      <View style={{flex: 0.5, flexDirection: 'row',  alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{backgroundColor: '#333232', 
                        fontSize: 20, 
                        paddingTop: '5%', 
                        paddingBottom: '5%', 
                        paddingLeft: '20%', 
                        paddingRight: '20%', 
                        color: 'white'}}>
            Voltar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={chamarModal}>
          <Text style={{backgroundColor: '#232323', 
                        fontSize: 20, 
                        paddingTop: '5%', 
                        paddingBottom: '5%', 
                        paddingLeft: '15%', 
                        paddingRight: '15%',
                        color: '#FFCF66'}}>
            Confirmar
          </Text>
          <Modal visible={modalVisible} animationType='fade' transparent={true}>
            <ModalEmConstrucao fechar={() => setModalVisible(false)}/>
          </Modal>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414141',
  },
  logo:{
    marginTop: 40,
    height: 100,
    width: 120,
  },
  input: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 20,
    width: '85%',
    height: '18%',
    borderRadius: 5,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white',
    marginBottom: '4%',
  },
  textoCadatro: {
    marginTop: '5%',
    color: '#FFCF66',
    marginBottom: '15%',
    fontSize: 20,
  },
});
