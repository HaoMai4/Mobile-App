import { Text,View, SafeAreaView,Button, StyleSheet } from 'react-native';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux'

var reducer = (state, action)=>{
  switch(action.type){
    case 'INC': return {...state, count: state.count + 1}
    case 'DEC': return {...state, count: state.count - 1}
    default: return {...state};
  }
}

var store = createStore(reducer, {count: 0});

var Counter = ()=>{

  var state = useSelector(state=>state);
  var dispatch = useDispatch();

  return (
    <View>
      <Text>{state.count}</Text>
      <br/>
      <Button title = 'INC' onPress={()=>{
        dispatch({type: 'INC'});
      }}></Button>
      <br/>
      <Button title = 'DEC' onPress={()=>{
        dispatch({type: 'DEC'});
      }}></Button>
    </View>
  )
}

export default function App() {



  return (
    <Provider store={store}>
    <Counter/>
    </Provider>
  );
}

