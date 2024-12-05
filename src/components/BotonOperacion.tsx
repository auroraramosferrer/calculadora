import { Pressable, Text, StyleSheet, Vibration } from 'react-native';
import { GlobalStyles } from "../theme/GlobalStyles";
import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    width: number,
    tipo?: 'botonNormal' | 'botonSigno' | 'botonExtra' | 'botonIgual'
    onPress?: () => void;
}

export const BotonOperacion = ({label, width, tipo='botonNormal', onPress}:Props) => {
    const handlePress = () => {
        if (onPress) {
            onPress();
            Haptics.selectionAsync();
            console.log('vibro');
        }

    }

    return (
        <Pressable>
            <Text 
                style={[
                        tipo === 'botonNormal' ? GlobalStyles.botonNormal: null,
                        tipo === 'botonSigno' ? GlobalStyles.botonSigno : null,
                        tipo === 'botonExtra' ? GlobalStyles.botonExtra : null,
                        tipo === 'botonIgual' ? GlobalStyles.botonIgual : null,
                    
                    
                    , {width}]}
                onPress={handlePress}>{label}</Text>
        </Pressable>
    )
};
