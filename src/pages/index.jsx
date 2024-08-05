import React, {useEffect, useMemo, useState} from 'react'
import { nFormatter } from '../@utils/helpers'
import ButtonGroup from '../components/2_widgets/button-group'
import SimpleTable from "../components/1_elements/simple-table.jsx";
import axios from "axios";
import {useDataContext} from "../store/EtablissementContext";
import {SpinnerIcon} from "@chakra-ui/icons";
import {CircularProgress, Container, VStack} from "@chakra-ui/react";

export default function Home() {

    const { state, fetchData } = useDataContext();

    useEffect(() => {
        const asyncFetchData = async () => {
            await fetchData()
        }

        asyncFetchData()
    }, []);

    const currentItems = useMemo(() => state.data, [state.data]);

    return (
        <div>
            <VStack>
                <Container maxW='9xl' py='3' bg='blue.600' color='white'>
                    <p>"Etablissements" List</p>
                </Container>
                <Container maxW='9xl' py='5' >
                    {
                        state.data.length ? (
                            <SimpleTable
                                style={{height: '600px', overflow: 'auto'}}
                                tableData={{
                                    header: [ "id", "etablissement_type", "etablissement", "location", "address", "mail", "Action"],
                                    body: currentItems,
                                    footer: []
                                }}
                            />) :
                            <CircularProgress isIndeterminate color='green.300' />
                    }
                </Container>
                <ButtonGroup
                    data={[
                        { label: "Item 1", onClick: () => alert("Item 1 Clicked!") },
                        { label: "Item 2", onClick: () => alert("Item 2 Clicked!") },
                        { label: "Item 3", onClick: () => alert("Item 3 Clicked!") },
                        { label: "Item 4", onClick: () => alert("Item 4 Clicked!") },
                    ]}
                />
            </VStack>
        </div>
    )
}
