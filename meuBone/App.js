import './gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PaginaInicial from './Páginas/index.';
import Login from './Páginas/login';
import CadastroAcompanhante from './Páginas/cadastroAcompanhante';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}