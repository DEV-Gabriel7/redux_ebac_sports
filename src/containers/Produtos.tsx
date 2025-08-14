import type { Produto as ProdutoType } from '../types/produto'
import Produto from '../components/Produto'
import * as S from './styles'
import { useGetProdutosQuery } from '../store/slices/produtosApi'

const Produtos = () => {
  // RTK Query para buscar produtos
  const { data: produtos = [], isLoading, isError } = useGetProdutosQuery()

  if (isLoading) return <p>Carregando produtos...</p>
  if (isError) return <p>Erro ao carregar produtos.</p>

  return (
    <S.Produtos>
      {produtos.map((produto: ProdutoType) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default Produtos
