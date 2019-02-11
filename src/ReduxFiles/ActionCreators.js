import * as ActionConsts from './ActionConsts';

const increment = (value) => {
  return {
    type:ActionConsts.Increment,
    operationValue:value
  };
  //her actionda mutlaka tip olmalıdır
};

const decrement = (value) => {  
  return {
    type:ActionConsts.Decrement,
    operationValue:value
  };
};

export {increment,decrement};

//action creator lar adı üstünde action üretirler.
//view dan bir tetikleme geldiği zaman store u tetiklemek için önce action üretilir
//store.dispatch ile oluşturulan action store a gelir