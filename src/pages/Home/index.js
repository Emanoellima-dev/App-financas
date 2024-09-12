import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions'

const list = [
  {
  id: 1,
  label: 'Boleto conta luz',
  value: '390,00',
  date: '10/09/2024',
  type: 0
 },
 {
  id: 2,
  label: 'pix client x',
  value: '2.500,00',
  date: '11/09/2024',
  type: 1
 },
 {
  id: 3,
  label: 'Salario',
  value: '7.200,00',
  date: '12/09/2024',
  type: 1
 }
]


export default function Home() {
  return (
   <View>
    <Header name="Emanoel Lima"/>

   <Balance saldo="9.250,90" gastos="-527,00"/>
   
   <Actions/>

    <Text style={styles.title}>Ultimas Movimentações</Text>

    <FlatList
     style={styles.list}
     data={list}
     keyExtractor={ (item) => String(item.id) }
     showsVerticalScrollIndicator={false}
     renderItem={ ( {item} ) => <Movements data={item}/> }
    />
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 17,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
