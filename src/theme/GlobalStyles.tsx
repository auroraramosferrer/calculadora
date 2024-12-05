import { StyleSheet } from "react-native";
import { useState } from "react";
import { Colores } from './Colores'; 
import { Colors } from "react-native/Libraries/NewAppScreen";

export const GlobalStyles = StyleSheet.create({

    
        pantallaPrincipalGrande: {
            fontSize: 70,
            textAlign: 'right',
            fontWeight:400,
            width: '90%',
            color: Colores.deepPurple
        },
        pantallaPrincipalPequenya: {
          fontSize: 40,
          textAlign: 'right',
          fontWeight:400,
          width: '90%',
          paddingBottom:30,
          color: Colores.deepPurple
        },
        container: {
          flex: 1,
          backgroundColor: Colores.lilac,
          alignItems:  'center',
          justifyContent: 'flex-end',
          paddingBottom:20,
      
        },
        fila: {
          flexDirection: 'row',
          justifyContent: "space-around",
          marginBottom:16,
          paddingHorizontal:10,
          width: '100%',
        
        },
        botonNormal: {
          width:80,
          textAlign: 'center',
          padding: 10,
          fontSize: 30,
          fontWeight: 300,
          borderColor: Colores.white,
          borderWidth: 2,
          borderRadius:40,
          color: Colores.white,
          backgroundColor: Colores.blue

      }, 
      botonSigno:{
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: Colores.white,
        borderWidth: 2,
        borderRadius:40,
        color:Colores.white,
        backgroundColor: Colores.purple
      }, 
      botonExtra:{
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: Colores.white,
        borderWidth: 2,
        borderRadius:40,
        color:Colores.white,
        backgroundColor: Colores.yellow
      },
      botonIgual:{
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: Colores.white,
        borderWidth: 2,
        borderRadius:40,
        color:Colores.white,
        backgroundColor: Colores.red
      }
      });
