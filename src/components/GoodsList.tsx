import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { useDispatch } from 'react-redux';
import { actions as goodActions } from '../features/goods';

  // function wait(delay: number) {
  // return new Promise((resolve) => setTimeout(resolve, delay));
  // }

export const GoodsList = () => {
  const [newGood, setNewGood] = useState('');
  const dispatch = useDispatch();
  const { goods, loading, error} = useAppSelector(state => state.goods);
  
  const addGood = (goodToAdd: string) => dispatch(goodActions.add(goodToAdd))

  const removeGood = (goodToRemove: string) => dispatch(goodActions.take(goodToRemove));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!newGood) {
      return;
    }
    addGood(newGood);
    setNewGood('');
  };
  

  useEffect(() => {
  const fetchData = async () => {
    try { 
      dispatch(goodActions.setLoading(true))
      const res = await fetch('https://jsonplaceholder.typicode.com/user')
      const json = await res.json()
      const goods: string[] = json.map(user => user.name); //к user необходимо сделать interface
      dispatch(goodActions.set(goods));
    } catch (error) {
      dispatch(goodActions.setError("error"))
      console.error(error);
    } finally {
    dispatch(goodActions.setLoading(false))
    }
  
  };

  fetchData();
  }, []);
  
  if (loading) {
    return (<p>Loading...</p>)
  }
  return (
    <section className="goods">
      <h2>Goods:</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newGood}
          onChange={e => setNewGood(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {goods.map(good => (
          <li key={good}>
            <button
              onClick={() => removeGood(good)} 
              className="delete"
            />
            {good}
          </li>
        ))}
      </ul>
    </section>
  )
}

