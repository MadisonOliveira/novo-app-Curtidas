import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Colors, LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState, useEffect} from 'react';


 
export default function App() {
 
 
  
  let img ='https://cdns-images.dzcdn.net/images/artist/212c81736e933945d9097d499d63f7ca/1900x1900-000000-80-0-0.jpg';
  /*let variavel img que é declarada em imagem em link  linha 10 */ 
  const [count,setCount] = useState(0);
  const[msg, setMsg] =useState('');
  /*useEffect */
 useEffect(() =>
 {
setMsg('O componte foi atualizado' + 
  count +
   'vez(es)');

 }, [count] );

/*Declaração userState  */ 
  function curtir(){
    setCount(count+1);}

function reset() {
  setCount(count-1);  }
      
  
   



return (
<View style={styles.container}>   
 <Text                                                           /*TOPO DO APP APRESENTAÇÃO  */ 
   style={{
    alignItems:'center',
    fontSize:16,
     bottom:60,
      paddingLeft:110,                                 
       bottom:32,
        padding:16, 
          color:'#fff',
           width:420,
            marginTop:10, 
             height:50,
                borderRadius:9, 
                  backgroundColor:'#4169E1'}} >
         Seja bem vindo ao meu app!</Text>                                               
                
       
  <View style={{
        width:250,
          padding:10, 
             alignItems:'center'}}>

        <Image source={{uri: img}} style={{ width:300, height:300,}} />

           <View style={{bottom:50, alignItems:'center', display:'flex', flexDirection:'row'}}>
                   <View style={{padding:5}}>
                      <Button onPress={()=> curtir()} title='curtida'/>
                           </View>          
                             <Button onPress={()=>reset()} title='Descurti'/>
                                </View>
                                   </View>

<View style={{display:'flex',flexDirection:'row', alignItems: 'center',bottom:40}}>
            
            <Ionicons name='heart' size={30} color='red'/>
               <Text style={{ padding:5,fontSize:15, color:'#FFF', backgroundColor:'#000'}}>{count} Número de curtidas</Text>
                   </View>
                       
                    
                   <Text style={{
                     backgroundColor:'#000000',
                       padding:4,
                         bottom:30,
                          fontSize:12,
                            color:'#FFF',
                             alignItems:'center'
                             }}>{msg}</Text>



<View style={{ bottom:49,width:390,alignItems:'center'}}>
     <TextInput
       keyboardType='email-address'
          placeholder='Digite o seu texto ....'
            style={{top:10, padding:10, margin:15, borderWidth:1, borderColor:'#000', width: '80%', borderRadius:5}} />

        <TouchableOpacity style={{ backgroundColor:'#363636', borderRadius:10, margin:10}}>
           <Text style={{paddingLeft:30,width:110,color:'#FFF',margin:12, borderRadius:10}}>
               SALVAR </Text>
                </TouchableOpacity>
                         </View>
                        
                          
 


             

            < Text style={{
                top:10,
                 width:420,
                  height:46,
                    backgroundColor:'#4169E1',
                     fontSize:15,
                      color:'#FFF',
                        paddingLeft:130,
                         paddingTop:8
                             }}>Meu projeto curtida </Text>

      <StatusBar style="auto" />
          </View>
  );
}











const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
