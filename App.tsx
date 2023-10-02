import React, {useState} from "react";
import{ Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Api from "./src/services/api";

export default function App(){

  const[cep,setCep]=useState("")
  const[logradouro,setLogradouro]=useState("")
  const[bairro,setBairro]=useState("")
  const[localidade,setLocalidade]=useState("")
  const[uf,setUf]=useState("")

  async function buscarCep(){
    if(cep==""){
      Alert.alert("Cep Invalido!")
      setCep("")
    }

    try{
      const response= await Api.get ( '/${cep}/json/')
      setLogradouro(response.data.logradouro)
      setBairro(response.data.bairro)
      setLocalidade(response.data.localidade)
      setUf(response.data.uf)
    }catch(error){
      console.log("ERRO" + error)
    }


  }


  return(
    <View style={styles.containerMain}>
      <View style={styles.topBar}>

        <Text style={styles.tituloTop}>Encontre seu endereço</Text>

      </View>

      <View style={styles.containerCep}>
        <TextInput value={cep} onChangeText={(texto)=> setCep(cep)} placeholder="Cep" style={
          {
            borderColor:"#000000", borderWidth:2, width:200,
            fontSize:18,marginTop:30, marginEnd:20, borderRadius:10, padding:15
          }}>
          
        </TextInput>
        <TouchableOpacity style={styles.botaoBuscar} onPress={buscarCep}>
          <Text style={styles.textoBotaoBuscar}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <TextInput value={logradouro} onChangeText={(texto)=> setLogradouro(texto)} placeholder="Logradouro" style={styles.caixaTexto}>
          
        </TextInput>
        <TextInput value={bairro} onChangeText={(texto)=> setBairro(texto)} placeholder="Bairro" style={styles.caixaTexto}>
          
        </TextInput>
        <TextInput value={localidade} onChangeText={(texto)=> setCep(texto)} placeholder="Cidade" style={styles.caixaTexto} >
          
        </TextInput>
        <TextInput value={uf} onChangeText={(texto)=> setUf(texto)} placeholder="Estado" style={
          {
            borderColor:"#000000", borderWidth:2, width:100,
            fontSize:18,marginTop:10, marginEnd:20, borderRadius:10,marginHorizontal:20, padding:15
          }}>
          
        </TextInput>

    </View>
  )
}

const styles=StyleSheet.create({
  containerMain:{
    flex:1,
    flexDirection:"column",
  },
  topBar:{
    flexDirection:"row",
    height:70,
    backgroundColor:"#FFA500"
  },
  tituloTop:{
    color:"#ffffff",
    fontSize:25,
    fontWeight:"bold",
    alignSelf:"center",
    margin:20,
  },
  containerCep:{
    flexDirection:"row",
    height:100,
    marginHorizontal:20,
  },
  botaoBuscar:{
    backgroundColor:"#FFA500",
    width:120,
    height:70,
    marginTop:30,
    marginEnd:20,
    borderRadius:10,
    padding:20
  },
  textoBotaoBuscar:{
    color:"#FFFFFF",
    fontSize:18,
    fontWeight:"bold",
    alignSelf:"center"

  },
  caixaTexto:{
    borderColor:"#000000",
    borderWidth:2,
    padding:15,
    fontSize:18,
    borderRadius:10,
    marginTop:10,
    marginHorizontal:20
  }

})