import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Modal } from '@material-ui/core';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarFilterButton } from '@material-ui/data-grid'
import React, { useContext, useState } from 'react'
import { grid_locale } from '../../etc/grid_locale';
import { Context } from '../../state/Store';
import { EditForm } from './EditForm';
import { ViewData } from './ViewData';




const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarColumnsButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}







export const DataTable = () => {

  const [state, setState] = useContext(Context);
  const [selectedRow, setRowState] = useState({ data: { id: "" } });
  const [viewItem, setViewItem] = useState({ data: { id: "" } });
  const [editItem, setEditItem] = useState({ data: { id: "" } });

  const handleDelete = () => {
    if (selectedRow !== {}) {
      setState(state.filter(item => { return item.id !== selectedRow.data.id }))
    }
  }




  const [edit, setEdit] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    const selectedView = selectedRow.data;
    setViewItem(selectedView)
    setOpen(true);
    console.log(selectedView)
  };

  const handleEdit = () => {
    const selectedEdit = selectedRow.data;
    setEditItem(selectedEdit)
    setEdit(true)
  }

  const handleFinishedEditing = () => {
    setEdit(false)
  }


  const handleClose = () => {
    setOpen(false);
  };







  const columns = [
    {
      field: "buttons", headerName: "  ", width: 150, renderCell: (params) => (
        <strong>

          <IconButton
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={handleDelete}

          >

            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
          <IconButton
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={handleEdit}


          >

            <FontAwesomeIcon icon={faEdit} />
          </IconButton>
          <IconButton
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={handleOpen}
          >

            <FontAwesomeIcon icon={faEye} />
          </IconButton>

        </strong>
      )
    },
    {

      field: "id", headerName: "ID", width: 100, checkboxSelection: true
    },
    { field: "NOME FANTASIA", headerName: "Nome Fantasia", width: 200 },
    { field: "ESTADO", headerName: "Estado", width: 150 },
    { field: "CIDADE", headerName: "Cidade", width: 150 },
    { field: "DAT CADASTRO", headerName: "Data de Cadastro", width: 200 },
    { field: "STATUS", headerName: "Status", width: 150 },

  ];



  


  return (
    <div className="main-table">
      <div
        className="container bg-white"
        style={{ height: 400, width: "calc(100% - 130px)", paddingLeft: '120px', marginTop: '30px' }}
      >
        <DataGrid onRowSelected={(row) => setRowState(row)} rows={state} columns={columns} components={{ Toolbar: CustomToolbar, }} localeText={grid_locale} />
        <Modal
          open={open}
          onClose={handleClose}
        >
          <div>

            <ViewData handleClose={handleClose} data={viewItem}></ViewData>

          </div>
        </Modal>
        <Modal
          open={edit}
          onClose={handleFinishedEditing}
        >
          <div>
         
            <EditForm handleClose={handleFinishedEditing} item={editItem}></EditForm>

          </div>
        </Modal>

      </div>
    </div>
  )
}
