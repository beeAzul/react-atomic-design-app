import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import DeleteButton from "../2_widgets/DeleteButton";

export default function SimpleTable({variant, caption, tableData, onClick, className, ...otherProps}) {

    return (
        <TableContainer
            size='lg'
            className={`mytheme__button ${className}`}
            {...otherProps}
        >
            <Table variant={variant}>
                <TableCaption>{caption}</TableCaption>
                <Thead>
                    <Tr>
                        {
                            tableData.header.map((el,key) => (<Th key={key}>{el}</Th>))
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        tableData.body.map((item,kay) =>
                            (<Tr key={kay}>
                                {
                                    Object.values(item).map((value, keu)=>(<Td key={keu}>{value}</Td>))
                                }
                                {
                                    (<Td><DeleteButton id={item.id} /></Td>)
                                }
                            </Tr>)
                        )
                    }
                </Tbody>
                <Tfoot>
                    <Tr>
                        {
                            tableData.footer.map(el => (<Th>{el}</Th>))
                        }
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}
