class ProdutoRepositorySequelize 
    implements ProdutoRepository {

    async listar(): Promise<Produto[]> {
        // Implementação usando Sequelize
    }

    async buscarPorId(
        id: number
    ): Promise<Produto | null> {
        // Implementação usando Sequelize
    }

    async criar(
        produto: Produto
    ): Promise<Produto> {
        // Implementação usando Sequelize
    }
}