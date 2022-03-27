import axios from 'axios';

const DIPENDENTE_API="http://localhost:8080/"//url mappato nel backend. In questo caso viene mappato nella home

class DipendenteService{
    getDipendenti(){
        return axios.get(DIPENDENTE_API);
    }

}
export default new DipendenteService()