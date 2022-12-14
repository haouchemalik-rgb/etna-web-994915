import React, { useEffect, useState } from 'react';
import {DataManager, UrlAdaptor} from '@syncfusion/ej2-data';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { getAllUsers } from '../services/User.services';

const Customers = () => {

  const [users, setUsers] = useState(null);

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

  function dataStateChange(args: any){
    console.log('statechanged');
    refreshGrid();
  }

  function dataSourceChanged(state: any) { 
    debugger;
    console.log(state)
    if (state.action === "add") {
      console.log('add');
    } else if (state.action === "edit") {
      console.log('edit');
    } else if (state.requestType === "delete") {
      console.log('delete');
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

        dataSourceChanged={dataSourceChanged}
        dataStateChange={dataStateChange}
      >

        <ColumnsDirective>
          <ColumnDirective type='checkbox' width='40px'/>
          {/*<ColumnDirective field='id' headerText='id' textAlign='left' width='70px' isPrimaryKey={true}/>*/}
          <ColumnDirective field='userName'  headerText='userName' />
          <ColumnDirective field='firstName' headerText='Prénom'/>
          <ColumnDirective field='lastName' headerText='Nom'/>
          <ColumnDirective field='email' headerText='email'/>
          <ColumnDirective type='boolean' displayAsCheckBox='true' editType="booleanedit" field='admin' headerText='Administrateur'/>
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
