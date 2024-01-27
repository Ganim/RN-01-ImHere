
import { Text, View, TouchableOpacity} from 'react-native';
import { styles } from './styles';

type Props = {
  name: string;
}
export function Participant({name} : Props) {

  function handleParticipantRemove(){
    console.log('Você clicou no botão de Adicionar')
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.name}>
        {name}
      </Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantRemove}
        >
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
      
    </View>
  );
}