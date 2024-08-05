import {Action, DataState, Etablissement} from "../@types/etablissement";
import {createContext, ReactNode, useContext, useReducer} from "react";
import {requestClient} from "../@config/axios.js";

const initialState: DataState = {
    data: [],
};

const dataReducer = (state: DataState, action: Action): DataState => {
    switch (action.type) {
        case 'SET_DATA':
            return {...state, data: action.payload};
        case 'ADD_ETAB':
            return {...state, data: [...state.data, action.payload]};
        case 'UPDATE_ETAB':
            return {
                ...state,
                data: state.data.map(etab =>
                    etab.id === action.payload.id ? action.payload : etab
                ),
            };
        case 'DELETE_ETAB':
            return {
                ...state,
                data: state.data.filter(etab => etab.id !== action.payload),
            };
        default:
            return state;
    }
};

interface DataContextProps {
    state: DataState;
    dispatch: React.Dispatch<Action>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

/**
 * Creation of Hook to import context from any component
 */
export const useDataContext = (): DataContextProps => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    const fetchData = async () => {
        try {
            const response = await requestClient.get<Etablissement[]>('/etablissements');
            dispatch({ type: 'SET_DATA', payload: response.data.datas });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <DataContext.Provider value={{state, dispatch, fetchData}}>
            {children}
        </DataContext.Provider>
    );
};
