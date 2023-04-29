import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
// import { actions as positionActions } from '../features/position';
import * as positionActions from '../features/position';

// const doACircle = async (dispatch: Dispatch) => { //ф-ция заставляет cделать круг
//     dispatch(positionActions.moveRight());       //thunk - это ф-ция кот делает неск. д-й с store
//     await wait(300);                             // по сути thunk - это экшнкриэйтор, кот. можно задиспатчить
//     dispatch(positionActions.moveDown());
//     await wait(300);
//     dispatch(positionActions.moveLeft());
//     await wait(300);
//     dispatch(positionActions.moveUp());
//   }

export const Position = () => {
  //const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const { x, y } = useAppSelector(state => state.position);

  const moveLeft = () => dispatch(positionActions.moveLeft());
  const moveRight = () => dispatch(positionActions.moveRight());
  const moveUp = () => dispatch(positionActions.moveUp());
  const moveDown = () => dispatch(positionActions.moveDown());
  
  // const dance = async () => {
  //   //doACircle(dispatch); //если принимает dispatch
  // }
  
  const dance = () => dispatch(positionActions.doACircle(500)); //задиспатчили doACircle
  
  const transformValue = `translate(${x * 100}%, ${y * 100}%)`;

  return (
    <section className="position">
      <h2>Position:</h2>

      <div className="position__content">
        <div className="buttons">
          <button onClick={moveUp}>&uarr;</button>

          <div>
            <button onClick={moveLeft}>&larr;</button>
            <strong>{x}:{y}</strong>
            <button onClick={moveRight}>&rarr;</button>
          </div>

          <button onClick={moveDown}>&darr;</button>
        </div>

        <div className="field">
          <div className="track" style={{ transform: transformValue }} onClick={dance}>
            {x + y}
          </div>
        </div>
      </div>
    </section>
  );
};


