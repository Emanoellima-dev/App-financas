import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'


export default function Actions(){
 return (
   <ScrollView style={styles.container} horizontal={true}
    showsHorizontalScrollIndicator={false}>
    
    <TouchableOpacity style={styles.actionButton}>
    
    <View style={styles.areaButton}>
    
    <AntDesign name="addfolder" size={26} color="black"/>
       </View>
        <Text style={styles.labelButton}>Entradas</Text>
        
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.actionButton}>
      
     <View style={styles.areaButton}>
      
       <AntDesign name="tagso" size={26} color ="black"/>
       
       </View>
    <Text style={styles.labelButton} >Compras</Text>
    
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.actionButton}>
    
    <View style={styles.areaButton}>
    
    <AntDesign name="creditcard" size={26} color="black"/>
      </View>
      
      <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.actionButton}>
      
      
      <View style={styles.areaButton}>
         <AntDesign name="barcode" size={26} color="black"/>
         
        </View>
        
        <Text style={styles.labelButton}>Boletos</Text>
        
        </TouchableOpacity>


     <TouchableOpacity style={styles.actionButton}>
     
     <View style={styles.areaButton}>
       <AntDesign name="setting" size={26} color="black"/>
       
       </View>
         <Text style={styles.labelButton}>Conta</Text>
         
         </TouchableOpacity>
         
         </ScrollView>
    )
}


const styles = StyleSheet.create({
   container: {
     maxHeight: 84,
     marginBotton: 14,
     marginTop: 8,
     paddingEnd: 14,
     paddingStart: 14,
   },
   actionButton: {
     alignItems: 'center',
     marginRight: 32,
   },
   areaButton: {
     backgroundColor: '#ecf0f1',
     height: 60,
     width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
   },
   labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
   }
})
