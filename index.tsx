import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Your Chat App 😊</Text>
      
      <View style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <Text key={index} style={styles.chatMessage}>{msg}</Text>
        ))}
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Type your message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  chatContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  chatMessage: {
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
  },
});
