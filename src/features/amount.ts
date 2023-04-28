type AddAction = { type: 'amount/ADD'; payload: number }; //тип action для редьюсера

const add = (value: number): AddAction => ({
  type: 'amount/ADD',
  payload: value,
});

type TakeAction = { type: 'amount/TAKE'; payload: number }; //тип action для редьюсера

const take = (value: number): TakeAction => ({
  //actioncreator
  type: 'amount/TAKE',
  payload: value,
});

type ClearAction = {type: 'amount/CLEAR'};//тип action для редьюсера

const clear = (): ClearAction => ({ type: 'amount/CLEAR' });

type Action = AddAction | TakeAction | ClearAction;

const amountReducer = (amount = 0, action: Action) => {
  switch (action.type) {
    case 'amount/ADD':
      return amount + action.payload;
    case 'amount/TAKE':
      if (action.payload > amount) {
        return amount;
      }
      return amount - action.payload;
    case 'amount/CLEAR':
      return 0;
    default:
      return amount;
  }
};

export const actions = { add, take, clear };

export default amountReducer;
