import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  const participants = ["Guilherme", "Julle", "Fernando", "Cassia", "Ricardo", "Dandara", "Walleson", "Katia", "Maria"]
  function handleParticipantAdd(){
    console.log('Você clicou no botão de Adicionar')
  }
  function handleParticipantRemove(name: string){
    console.log(`Você clicou em remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 26 de Janeiro de 2024</Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        
      </View>

    <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({item})=>(
        <Participant
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)}
          />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={()=>(
        <Text style={styles.listEmptyText}>
          Adicione alguem na sua lista de participantes.
        </Text>
      )} 
    />

      

      <StatusBar style="auto" />
    </View>
  );
}