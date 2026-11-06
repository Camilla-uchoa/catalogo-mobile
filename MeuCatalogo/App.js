
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=2')
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
      .catch(erro => console.log(erro));
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Meu Catálogo</Text>

      {produtos.map(produto => (
        <View key={produto.id} style={styles.card}>

          <Image
            source={{ uri: produto.image }}
            style={styles.imagem}
            resizeMode="contain"
          />

          <Text style={styles.nome}>{produto.title}</Text>

          <Text style={styles.preco}>
            R$ {produto.price.toFixed(2)}
          </Text>

        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 60,
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#315B78',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  imagem: {
    width: '100%',
    height: 120,
  },
  nome: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  preco: {
    fontSize: 17,
    color: '#315B78',
    marginTop: 5,
  },
});
