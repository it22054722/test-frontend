import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({rows, selectedUser,deleteUser}) =>{
   
    return(
         <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell> ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                rows.length> 0 ? rows.map(row =>(
                    <TableRow key={row.id} 
                       sx={{'&:last-child td, &:last-child th':{border:0}}}>
                          <TableCell component='th' scope="row">{row.id}</TableCell>
                          <TableCell component='th' scope="row">{row.name}</TableCell>
                          <TableCell >
                            <Button
                            sx={{margin:'0px 10px',
                                backgroundColor:'#54A922',
                                color:'#000000'
                            }}
                            onClick={() =>selectedUser({id: row.id, name:row.name})}>
                                UPDATE
                            </Button>
                            <Button
                            sx={{margin:'0px 10px',
                                backgroundColor:'#c70039',
                                color:'#000000'
                            }}
                            onClick={() => deleteUser({id : row.id})}>
                                DELETE
                            </Button></TableCell>
                    </TableRow>
        
                )):(
                    <TableRow  sx={{'&:last-child td, &:last-child th':{border:0}}}>
                        <TableCell component='th' scope="row">No Data</TableCell>
                       </TableRow>
                )
                }
            </TableBody>
        </Table>
            </TableContainer>
            );
   
}

export default UsersTable;