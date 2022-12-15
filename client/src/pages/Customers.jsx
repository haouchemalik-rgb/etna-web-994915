import React, { useEffect, useState } from 'react';
import {DataManager, UrlAdaptor} from '@syncfusion/ej2-data';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { getAllUsers, deleteUser, addUser, editUser } from '../services/User.services';

const Customers = () => {

  const [users, setUsers] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    refreshGrid()
  }, [])

  function refreshGrid() {
    getAllUsers()
      .then(
        (res) => {
          setUsers(res.data);
        }
      );
  }

  function actionComplete(state) { 
    if (state.action === "add") {
      
      addUser(state.data).then(
        (res) => {
          if (res.status === 201) {
            refreshGrid();
            setErrorMessage(res.data.message);
          } else if ( res.status === 400 ) {
            setErrorMessage(res.data.message);
          } else if ( res.status === 500 ) {
            setErrorMessage('Something went wrong.');
          }
        }
      )
      
    } else if (state.action === "edit") {

      delete state.data['createdAt'];
      delete state.data['updatedAt'];
      
      editUser(state.data).then(
        (res) => {
          if (res.status === 201) {
            refreshGrid();
            setErrorMessage(res.data.message);
          } else if ( res.status === 400 ) {
            setErrorMessage(res.data.message);
          } else if ( res.status === 500 ) {
            setErrorMessage('Something went wrong.');
          }
        }
      )
      
    } else if (state.requestType === "delete") {

      state.data.forEach(element => {
        deleteUser(element.id).then(
          (res) => {
            refreshGrid();
            setErrorMessage(`Successfully deleted.`);
          }
        )
      });

    }
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Customers" />
      <GridComponent
        dataSource={users}
        enableHover={true} allowPaging={true}
        pageSettings={{ pageCount: 5}}
        persistSelection={true} toolbar={['Delete', 'Add', 'Edit', 'Search']}
        editSettings={{allowDeleting: true, allowEditing: true, allowAdding: true}}
        allowSorting={true}

        actionComplete={actionComplete}
      >

        <ColumnsDirective>
          <ColumnDirective type='checkbox' width='40px'/>
          <ColumnDirective field='userName'  headerText='userName' validationRules={{ required: true }}/>
          <ColumnDirective field='firstName' headerText='Prénom' validationRules={{ required: true }}/>
          <ColumnDirective field='lastName' headerText='Nom' validationRules={{ required: true }}/>
          <ColumnDirective field='email' headerText='email' validationRules={{ required: true }}/>
          <ColumnDirective field='password' headerText='password' type='password' validationRules={{ required: true }}/>
          <ColumnDirective type='boolean' displayAsCheckBox='true' editType="booleanedit" field='admin' headerText='Administrateur'/>
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
      {errorMessage}
    </div>
  );
};

export default Customers;
