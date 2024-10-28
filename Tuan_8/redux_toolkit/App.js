import { Text, Button, SafeAreaView, StyleSheet } from 'react-native';
import {useReducer} from 'react';

  var reducer = (state = (count: 0), action) =>{
    switch(action, type){
      case 'INC': return {count: state.count + 1}
      case 'DEC': return {count: state.count - 1}
      default: return state;
    }
  }

export default function App() {
  
  var [state, dispatch] = useReducer(reducer, {count: 0});

  return(
    <SafeAreaView style={style.container}>
    
    <Text>{state.count}</Text>
    <br/>
    <Button title='Inc' onPress={()=>{dispatch({type: 'INC'})
    }}></Button>
    <br/>
    <Button title='Dec'></Button>



    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 0,
  },
});


