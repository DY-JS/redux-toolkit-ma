import { createSlice } from '@reduxjs/toolkit';

type Position = { x: number; y: number }; //типизируем state и нач. сост-е

const startPosition: Position = { x: 0, y: 0 };

const positionslice = createSlice({
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

export default positionslice.reducer; //экспортировали редьюсер
export const { actions } = positionslice; //в actions нах. ф-ции moveLeft, moveRight, moveUp, moveDown
