type MoveLeftPosition = { type: 'position/MOVE_LEFT' };
type MoveRightPosition = { type: 'position/MOVE_RIGHT' };
type MoveUpPosition = { type: 'position/MOVE_UP' };
type MoveDownPosition = { type: 'position/MOVE_DOWN' };

type Action =
  | MoveLeftPosition
  | MoveRightPosition
  | MoveUpPosition
  | MoveDownPosition;

const moveLeft = (): MoveLeftPosition => ({ type: 'position/MOVE_LEFT' });
const moveRight = (): MoveRightPosition => ({ type: 'position/MOVE_RIGHT' });
const moveUp = (): MoveUpPosition => ({ type: 'position/MOVE_UP' });
const moveDown = (): MoveDownPosition => ({ type: 'position/MOVE_DOWN' });

type Position = { x: number; y: number }; //типизируем state и нач. сост-е

const startPosition: Position = { x: 0, y: 0 };

const positionReducer = (
  position: Position = startPosition,
  action: Action
): Position => {
  switch (action.type) {
    case 'position/MOVE_LEFT':
      return { ...position, x: position.x - 1 };
    case 'position/MOVE_RIGHT':
      return { ...position, x: position.x + 1 };
    case 'position/MOVE_UP':
      return { ...position, y: position.y - 1 };
    case 'position/MOVE_DOWN':
      return { ...position, y: position.y + 1 };
    default:
      return position;
  }
};

export const actions = { moveLeft, moveRight, moveUp, moveDown };
export default positionReducer;
