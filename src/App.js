import React, { Component } from 'react';
import Counter from './Containers/Counter';
import Result from './Components/Result';

class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        
        <Result/>
      </div>
    );
  }
}

export default App;

//ilk index.js ve  ReduxFiles daki Reducerı oku
//örnekte arttır butonuna basıldığı zaman butonun eventine gelir
//store daki dispatch metotu action üretir ve actionları store a aktarır
//action store a geldiği zaman reducera gönderir
//reducer state i componenti connect olmuş componentlerin mapStateToProps metotunu çalıştırır
//mapStateToProps metotu güncel state i tutar.
//componentte state deki değeri kullanmak için componentin props una set edilir
//componentte bu değere this.props şeklinde ulaşılır  
//bu örnekte hem Counter.js hem de Result.js connect edildi
//App.js deki arttır butonu basıldığı zaman her 2 js de tetiklendi