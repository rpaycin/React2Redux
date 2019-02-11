import * as ActionConsts from './ActionConsts';

export const reducerMethod = (state=0,action) => {
    switch (action.type) {
        case ActionConsts.Increment:
            return state+action.operationValue;
        case ActionConsts.Decrement:
            return state-action.operationValue;
        default:
            return state;
    }
  };

  //reducer metotu önceki state in durumunu ve action bilgilerini alır
  //reducer metotunda actiondaki tip ve diğer bilgilere göre güncel state oluşturur 
  //state oluştuktan sonra state e subscribe olanlara son durum bilgisi iletilir
  //state daha complex bir nesne yapısındadır. burada örnek olsun diye integer atandı sadece