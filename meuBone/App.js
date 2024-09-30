import './gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PaginaInicial from './Páginas/index';
import Login from './Páginas/login';
import CadastroAcompanhante from './Páginas/cadastroAcompanhante';
import CadastroPessoaAssistida from './Páginas/cadastroPessoaAssistida';
import Gps from './Páginas/gps';
import EscolherUsuario from './Páginas/escolherUsuario'
import UsuarioAcompanhante from './Páginas/usuarioAcompanhante';
import UsuarioPessoaAssistida from './Páginas/usuarioPessoaAssistida'

const Stack = createStackNavigator();

//initialRouteName define a pagina inicial
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='PaginaInicial'   
      screenOptions={{headerShown: false}}>
        <Stack.Screen name='PaginaInicial' component={PaginaInicial}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='CadastroAcompanhante' component={CadastroAcompanhante}/>
        <Stack.Screen name='CadastroPessoaAssistida' component={CadastroPessoaAssistida}/>
        <Stack.Screen name='Gps' component={Gps}/>
        <Stack.Screen name='EscolherUsuario' component={EscolherUsuario}/>
        <Stack.Screen name='UsuarioAcompanhante' component={UsuarioAcompanhante}/>
        <Stack.Screen name='UsuarioPessoaAssistida' component={UsuarioPessoaAssistida}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}