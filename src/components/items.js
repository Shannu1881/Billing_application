import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const Items = () => {

    const [count, setCount] = useState(0);

    const CountInc = () =>{
        setCount(count + 1);
    }

    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Qty',
            selector: row => row.qty,
        },
        {
            name: 'Rate',
            selector: row => row.qty,
        },
        {
            name: 'Bill',
            selector: row => row.qty,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Irani Chai',
            qty: '1988',
        },
        {
            id: 2,
            title: 'Masala Tea',
            qty: '1984',
        },
        {
            id: 3,
            title: 'Ginger Tea',
            qty: '1984',
        },
        {
            id: 4,
            title: 'Biscuits',
            qty: '1984',
        },
    ]

    return (
        <div className='container'>
             <div className='row'>
                <div className='col-lg-8'>
                    <h1 > The Indian Chai </h1>
                </div>
            </div> 
            <div className='row'>
                <div className='col-lg-8' style={{border:"1px solid black"}}>
                    <DataTable
                    title="Item List"
                        columns={columns}
                        data={data}
                        selectableRows
                        pagination
                        highlightOnHover
                    // expandableRows
                    // expandableRowsComponent={ExpandedComponent}
                    />
                </div>
            </div>
        </div>
    )
}

export default Items