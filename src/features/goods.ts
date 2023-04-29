import {
  Dispatch,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

type GoodsState = {
  goods: string[];
  loading: boolean;
  error: string;
};

const initialState: GoodsState = {
  goods: [],
  loading: false,
  error: '',
};

const goodSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    // setLoading: (state, action: PayloadAction<boolean>) => {  //это не нужно, если есть createAsyncThunk
    //   state.loading = action.payload;
    // },
    // setError: (state, action: PayloadAction<string>) => {  // оно будет в extraReducers
    //   state.error = action.payload;
    // },
    set: (state, action: PayloadAction<string[]>) => {
      state.goods = action.payload;
    },
    add: (state, action: PayloadAction<string>) => {
      state.goods.push(action.payload);
    },
    take: (state, action: PayloadAction<string>) => {
      state.goods = state.goods.filter((good) => good !== action.payload);
    },
    clear: (state) => {
      state.goods = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.goods = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Error';
    });
  },
});

// export const { set, add, take, clear, setLoading, setError } = goodSlice.actions;
export const { set, add, take, clear } = goodSlice.actions;
export default goodSlice.reducer;

const fetchGoods = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await res.json();
  return json.map((user) => user.name); //к user необходимо сделать interface
};

//oбработка этого экшна будет в extraReducers(под капотом - dispatch(goodActions.set(goods))
export const init = createAsyncThunk('goods/fetch', () => {
  return fetchGoods(); // тут должен быть промис
});

// export const init = () => {         //это всё и есть в createAsyncThunk()
//   return (dispatch: Dispatch) => {
//     dispatch(setLoading(true))
//     fetchData().then(data => dispatch(data))
//       .catch(() => {
//         dispatch(setError("error"))
//       })
//       .finally(() => dispatch(setLoading(false)))
//   }
// }
