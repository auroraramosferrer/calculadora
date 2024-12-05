import { Text, type TextProps, StyleSheet } from 'react-native';
import { GlobalStyles } from '../theme/GlobalStyles';
import { Children } from 'react';

interface Props extends TextProps{
    tamanio: 'p1' | 'p2'

};


export const PantallaBuena = ({children, tamanio, ...rest}:Props) => {
    return (
      <Text {...rest}
      adjustsFontSizeToFit
      style={[tamanio === 'p1' ? GlobalStyles.pantallaPrincipalGrande : null,
              tamanio === 'p2' ? GlobalStyles.pantallaPrincipalPequenya : null]}>
          {children}
      </Text>
    )
  }
  
 

    
