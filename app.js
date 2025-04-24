import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await fetch('http://<YOUR_LAPTOP_IP>:3001/api/messages');
    const data = await res.json();
    setMessages(data);
  };

  const sendMessage = async () => {
    await fetch('http://<YOUR_LAPTOP_IP>:3001/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: message }),
    });
    setMessage('');
    fetchMessages(); // Refresh the list
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={(_, index) => index.toString()}
      />
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}
