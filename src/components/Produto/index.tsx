import type { Produto as ProdutoType } from '../../types/produto'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  adicionarAoCarrinho,
  toggleFavorito
} from '../../store/slices/carrinhoSlice'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

type Props = {
  produto: ProdutoType
}

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)
  const estaNosFavoritos = favoritos.some((p) => p.id === produto.id)

  // Função para adicionar ao carrinho com alerta
  const handleAdicionarAoCarrinho = () => {
    const existe = carrinho.find((p) => p.id === produto.id)
    if (existe) {
      alert('Item já adicionado')
    } else {
      dispatch(adicionarAoCarrinho(produto))
    }
  }

  // Função para favoritar/desfavoritar
  const handleFavoritar = () => {
    dispatch(toggleFavorito(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAdicionarAoCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
