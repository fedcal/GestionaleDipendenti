import React, { Component } from 'react'

 class ListaDipendentiComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            dipendenti: []
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista dipendenti</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Cognome</th>
                                <th>Email</th>
                                <th>Azioni </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                 this.state.dipendenti.map(
                                     dipendenti => 
                                     <tr key={dipendenti.id}>
                                         <td>{dipendenti.nome}</td>
                                         <td>{dipendenti.cognome}</td>
                                         <td>{dipendenti.email}</td>
                                     </tr>
                                 )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
  }
}

export default ListaDipendentiComponent