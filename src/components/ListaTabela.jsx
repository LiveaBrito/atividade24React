function ListaTabela(){
    const ElementoId = (props) => {
        return dadosListaTabela[props.indice].id;
    };

    const ElementoNome = (props) => {
        return dadosListaTabela[props.indice].nome;
    };

    const ElementoIdade = (props) => {
        return dadosListaTabela[props.indice].idade;
    };

    const dadosListaTabela = [
        {id: 1, nome: "Livea", idade: 20 },
        {id: 2, nome: "Camila", idade: 23},
        {id: 3, nome: "Marco", idade: 15},
        {id: 4, nome: "Claudia", idade: 29}
    ];

    return (
        <>
        <h1>Lista de Tabela Array</h1>
        <table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
                <tr>
                    <td>
                        <ElementoId indice={0} />
                    </td>
                    <td>
                        <ElementoNome indice={0} />
                    </td>
                    <td>
                        <ElementoIdade indice={0} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <ElementoId indice={1}/>
                    </td>
                    <td>
                        <ElementoNome indice={1}/>
                    </td>
                    <td>
                        <ElementoIdade indice={1}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ElementoId indice={2}/>
                    </td>
                    <td>
                        <ElementoNome indice={2}/>
                    </td>
                    <td>
                        <ElementoIdade indice={2}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ElementoId indice={3}/>
                    </td>
                    <td>
                        <ElementoNome indice={3}/>
                    </td>
                    <td>
                        <ElementoIdade indice={3}/>
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    );
}

export default ListaTabela;