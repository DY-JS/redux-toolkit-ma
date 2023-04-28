type AddAction = { type: 'goods/ADD'; payload: string }; //тип action для редьюсера

const add = (good: string): AddAction => ({
  type: 'goods/ADD',
  payload: good,
});

type TakeAction = { type: 'goods/TAKE'; payload: string }; //тип action для редьюсера

const take = (good: string): TakeAction => ({
  type: 'goods/TAKE',
  payload: good,
});

type ClearAction = { type: 'goods/CLEAR' }; //тип action для редьюсера

const clear = (): ClearAction => ({ type: 'goods/CLEAR' });

type Action = AddAction | TakeAction | ClearAction;

export const actions = { add, take, clear };

const goodsReducer = (goods: string[] = [], action: Action) => {
  switch (action.type) {
    case 'goods/ADD':
      return [...goods, action.payload];
    case 'goods/TAKE':
      return goods.filter((good) => good !== action.payload);
    case 'goods/CLEAR':
      return [];
    default:
      return goods;
  }
};

export default goodsReducer;
