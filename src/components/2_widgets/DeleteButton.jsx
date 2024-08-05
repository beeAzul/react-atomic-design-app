import React from 'react';
import {useDataContext} from "../../store/EtablissementContext";
import { DeleteIcon } from '@chakra-ui/icons'
import axios from "axios";
import {Button} from "@chakra-ui/react";

export default function DeleteButton ({id}) {
    const { dispatch, fetchData } = useDataContext();

    const deleteEtablissement = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/etablissement/${id}`);
            await fetchData()
            await dispatch({ type: 'DELETE_ETAB', payload: id });
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Button onClick={deleteEtablissement}><DeleteIcon /></Button>
    );
};
