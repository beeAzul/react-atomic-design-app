export interface Etablissement {
    id: number;
    etablissement_type: string;
    etablissement: string;
    location: string;
    address: string;
    mail: string;
}

export interface DataState {
    data: Etablissement[];
}

export type Action =
    | { type: 'SET_DATA'; payload: Etablissement[] }
    | { type: 'ADD_ETAB'; payload: Etablissement }
    | { type: 'UPDATE_ETAB'; payload: Etablissement }
    | { type: 'DELETE_ETAB'; payload: number };
