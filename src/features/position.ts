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
const startPosition = { x: 0, y: 0 };

const positionReducer = (position = startPosition, action: Action) => {
  return position;
};

export default positionReducer;
