
import { Text, View, TouchableOpacity} from 'react-native';
import { styles } from './styles';

export function Participant() {

  function handleParticipantRemove(){
    console.log('Você clicou no botão de Adicionar')
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.name}>Guilherme Ganim</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantRemove}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      
    </View>
  );
}