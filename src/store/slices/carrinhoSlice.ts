import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types/produto'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      if (!state.itens.find((p) => p.id === action.payload.id)) {
        state.itens.push(action.payload)
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    },
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const existe = state.favoritos.find((p) => p.id === action.payload.id)
      if (existe) {
        state.favoritos = state.favoritos.filter(
          (p) => p.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho, toggleFavorito } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer
