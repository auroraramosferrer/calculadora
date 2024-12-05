import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PantallaBuena } from './src/components/PantallaBuena';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/theme/GlobalStyles';


export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         calcular, Operadores, resultado  } = useCalculadora();
         

  return (
  
    <View style={GlobalStyles.container}>    
      <PantallaBuena tamanio='p1' numberOfLines={1} adjustsFontSizeToFit>{formula}</PantallaBuena>
    
     {formula === numeroAnterior ? (
      <PantallaBuena tamanio='p2' numberOfLines={1} adjustsFontSizeToFit>{formula}</PantallaBuena> 
     ) : (
      <PantallaBuena tamanio='p2' numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</PantallaBuena>
    
     )}
     
    
      <StatusBar style="auto" />

    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo='botonExtra' label='C' width={80} onPress={clean}></BotonOperacion>
      <BotonOperacion tipo='botonExtra' label='+/-' width={80} onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion tipo='botonExtra' label='del' width={80} onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion tipo='botonSigno' label='/' width={80} onPress={() => calcular(Operadores.dividir)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='7' width={80} onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion label='8' width={80} onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion label='9' width={80} onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion tipo='botonSigno' label='x' width={80} onPress={() =>calcular(Operadores.multiplicar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='4' width={80} onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion label='5' width={80} onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion label='6' width={80} onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion tipo='botonSigno' label='-' width={80} onPress={() =>calcular(Operadores.restar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='1' width={80} onPress={() => {construirNumero('1')}}></BotonOperacion>
      <BotonOperacion label='2' width={80} onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion label='3' width={80} onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion tipo='botonSigno' label='+' width={80} onPress={() =>calcular(Operadores.sumar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='0' width={160} onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion tipo='botonExtra' label='.' width={80} onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion tipo='botonIgual' label='=' width={80} onPress={resultado}></BotonOperacion>
    </View>
    </View>


  );
}

const styles = StyleSheet.create({
 
});
