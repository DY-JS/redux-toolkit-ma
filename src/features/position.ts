import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from '@reduxjs/toolkit';

type Position = { x: number; y: number }; //типизируем state и нач. сост-е

const startPosition: Position = { x: 0, y: 0 };

const positionSlice = createSlice({
  name: 'position',
  initialState: startPosition,
  reducers: {
    // moveLeft: (position) => ({ ...position, x: position.x - 1 }),
    moveLeft: (position) => {
      position.x -= 1;
    },
    moveRight: (position) => {
      position.x += 1;
    },
    moveUp: (position) => {
      position.y -= 1;
    },
    moveDown: (position) => {
      position.y += 1;
    },
  },
});

export default positionSlice.reducer; //экспортировали редьюсер
//export const { actions } = positionSlice; //в actions нах. ф-ции moveLeft, moveRight, moveUp, moveDown
export const { moveLeft, moveRight, moveDown, moveUp } = positionSlice.actions;

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
//ф-ция заставляет cделать круг - это асинхронный экшн, кот делает несколько экшнов
export const doACircle = (delay: number) => {
  return async (dispatch: Dispatch) => {
    //Dispatch from '@reduxjs/toolkit'
    dispatch(moveRight()); //thunk - это ф-ция кот делает неск. д-й с store
    await wait(300); // по сути thunk - это экшнкриэйтор, кот. можно задиспатчить
    dispatch(moveDown());
    await wait(300);
    dispatch(moveLeft());
    await wait(300);
    dispatch(moveUp());
  };
};

//doACircle тоже попадает в positionSlice.actions
