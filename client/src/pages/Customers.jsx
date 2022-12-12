import React, { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { getAllUsers } from '../services/User.services';

const Customers = () => {

  const [users, setUsers] = useState(null);

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        if(res.status === 200) {
          setUsers(res.data);
        }
      })
  }, [])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={users}
        enableHover={false} allowPaging={true}
        pageSettings={{ pageCount: 5}}
        persistSelection={true} toolbar={['Delete']}
        allowDeleting={true} allowSorting={true} allowEditing={true}
      >
        <ColumnsDirective>
          <ColumnDirective field='id' headerText='id' textAlign='left' width='50px'/>
          <ColumnDirective field='userName' headerText='userName'/>
          <ColumnDirective field='firstName' headerText='Prénom'/>
          <ColumnDirective field='lastName' headerText='Nom'/>
          <ColumnDirective field='email' headerText='email'/>
          <ColumnDirective field='admin' headerText='Administrateur'/>
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
