import React, { useState, useEffect, useRef } from 'react';
import image from "../images/tea-banner2.jpg";
import { Table } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import './data.css';
import logo from './logo.svg';
//import indian_chai from './indian_chai.png';
// import { ComponentToPrint } from './ComponentToPrint';


const Data = () => {
    //const [cost, setCost] = useState(0);
    //const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    //const [value, setValue] = useState(15);
    //const [total, setTotal] = useState();
    //const [data, setData] = useState([]);
    const [message, updateMessage] = useState();
    //const [toggle, setToggle] = useState(false);
    

    // Tea items states
    const [iraniTea, setIraniTea] = useState();
    const [masalaTea, setMasalaTea] = useState();
    const [gingerTea, setGingerTea] = useState();
    const [osmaniaBiscuits, setOsmaniaBiscuits] = useState();
    const [dryFruitBiscuits, setDryFruitBiscuits] = useState();
    const [butterAlmondCookies, setButterAlmondCookies] = useState();
    const [fruitBiscuits, setFruitBiscuits] = useState();
    const [meltingMomentBiscuits, setMeltingMomentBiscuits] = useState();
    const [saltBiscuits, setSaltBiscuits] = useState();
    const [chocoChipsOsmaniaBiscuits, setChocoChipsOsmaniaBiscuits] = useState();

    // Tea & Biscuits cost States
    const [iraniTeaCost, setIraniTeaCost] = useState(15);
    const [masalaTeaCost, setMasalaTeaCost] = useState(15);
    const [gingerTeaCost, setGingerTeaCost] = useState(15);
    const [osmaniaBiscuitsCost, setOsmaniaBiscuitsCost] = useState(10);
    const [dryFruitBiscuitsCost, setDryFruitBiscuitsCost] = useState(10);
    const [butterAlmondCookiesCost, setButterAlmondCookiesCost] = useState(15);
    const [fruitBiscuitsCost, setFruitBiscuitsCost] = useState(10);
    const [meltingMomentBiscuitsCost, setMeltingMomentBiscuitsCost] = useState(15);
    const [saltBiscuitsCost, setSaltBiscuitsCost] = useState(5);
    const [chocoChipsOsmaniaBiscuitsCost, setchocoChipsOsmaniaBiscuitsCost] = useState(15);

    // Tea & Biscuits Count States
    const [iraniTeaCount, setIraniTeaCount] = useState(0);
    const [masalaTeaCount, setMasalaTeaCount] = useState(0);
    const [gingerTeaCount, setGingerTeaCount] = useState(0);
    const [osmaniaBiscuitsCount, setOsmaniaBiscuitsCount] = useState(0);
    const [dryFruitBiscuitsCount, setDryFruitBiscuitsCount] = useState(0);
    const [butterAlmondCookiesCount, setButterAlmondCookiesCount] = useState(0);
    const [fruitBiscuitsCount, setFruitBiscuitsCount] = useState(0);
    const [meltingMomentBiscuitsCount, setMeltingMomentBiscuitsCount] = useState(0);
    const [saltBiscuitsCount, setSaltBiscuitsCount] = useState(0);
    const [chocoChipsOsmaniaBiscuitsCount, setChocoChipsOsmaniaBiscuitsCount] = useState(0);

    //Toggle options
    const [iraniToggle, setIraniToggle] = useState(false);
    const [masalaToggle, setMasalaToggle] = useState(false);
    const [gingerToggle, setGingerToggle] = useState(false);
    const [osmaniaBisToggle, setOsmaniaBisToggle] = useState(false);
    const [dryFruitBisToggle, setDryFruitBisToggle] = useState(false);
    const [almondCookiesToggle, setAlmondCookiesToggle] = useState(false);
    const [fruitBisToggle, setFruitBisToggle] = useState(false);
    const [meltingMomentBisToggle, setMeltingMomentBisToggle] = useState(false);
    const [saltBisToggle, setSaltBisToggle] = useState(false);
    const [chocoChipsToggle, setChocoChipsToggle] = useState(false);

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    }, []);

    // const deleteData = (id) =>{
    //     updateMessage(data[id] + " Deleted Successfully");
    //     data.splice(id, 1); // a-b
    //     setData( data=>[...data]);  //a = a
    // }

    const deleteData = (id)=>{
        updateMessage(iraniTea[id] + "Delete Successfully");
        iraniTea.splice(id, 1);
        setIraniTea(iraniTea=>[...iraniTea]);
    }

    // const TableData = () => {
    //     const newData = [...data, []];
    //     setData(newData);

    // }


    // const inClose = () => {
    //     return invokeModal(false);
    // }

    // const initModal = () => {
    //     return invokeModal(!false);
    // };

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Items-Bill',
        onAfterPrint: () => alert("print success")
    });



    return (
        <div className=''>
            <div style={{ backgroundImage: `url(${image})`, width: '100%', height: '232px' }}>
                <img src={logo} alt="logo" width="700" height="160" id='logo-img' />
            </div>
            <div className=''>
                <h1 style={{ color: 'deepskyblue' }}> Indian Chai Menu List</h1>
            </div>
            <div className='row mt-5'>
                {/* <div className='col-lg-1'></div> */}
                <div className='col-lg-4'>
                    <Table bordered cellPadding='10' cellSpacing='10' style={{ color: 'whitesmoke' }} >
                        <thead>
                            <tr>
                                <th> Sl.No</th>
                                <th> Itemslist</th>
                                <th> Price</th>
                                <th> Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td>1.</td>
                                <td>Irani Chai</td>
                                <td>15rs</td>
                                <td>
                                    <button className='btn btn-primary' style={{ widows: '20px', }}
                                        onClick={() => {
                                            setIraniTea('Irani Chai');
                                            setIraniTeaCost(15);
                                            setIraniToggle(!iraniToggle);
                                            //setName('Irani Chai')
                                            //data.push({'id':1, 'name':'Irani Chai', 'cost':15,});
                                            //setData('Irani Chai');
                                            //setIraniTea(count * iraniTeaCost);
                                            //setCost(15);
                                            // initModal();
                                            //setTotal(count*cost);
                                            //console.log('count', count)
                                            //TableData();
                                            // console.log('data', data);
                                            // console.log('count', count);
                                        }}
                                    > Order</button>
                                </td>
                            </tr>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td>2.</td>
                                <td>Masala Tea</td>
                                <td>15rs</td>
                                <td>
                                    <button className='btn btn-primary' style={{ widows: '20px', }}
                                        onClick={() => {
                                            setMasalaTea("Masala Tea");
                                            setMasalaTeaCost(15);
                                            setMasalaToggle(!masalaToggle);
                                            //setToggle(!toggle);
                                            // setName('Masala Tea')
                                            // setData('Masala Tea');
                                            //data.push({'id':2, 'name':'Masala Tea', 'cost':10});
                                            //setMasalaTea(count*15)
                                            //setCost(10);
                                            //initModal();
                                            //TableData();
                                        }}
                                    > Order</button>
                                </td>
                            </tr>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td>3.</td>
                                <td>Ginger Tea</td>
                                <td>15rs</td>
                                <td>
                                    <button className='btn btn-primary' style={{ widows: '20px', }}
                                        onClick={() => {
                                            setGingerTea("Ginger Tea");
                                            setGingerTeaCost(15);
                                            setGingerToggle(!gingerToggle);
                                            // setData('Ginger Tea');
                                            //data.push({'id':3, 'name':'Ginger Tea', 'cost':15});
                                            //setCost(10);
                                            //initModal();
                                            // TableData();
                                        }}
                                    > Order</button>
                                </td>
                            </tr>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td>4.</td>
                                <td>Osmania Biscuits</td>
                                <td>15rs</td>
                                <td>
                                    <button className='btn btn-primary' style={{ widows: '20px', }}
                                        onClick={() => {
                                            // setName('Osmania Biscuits');
                                            //data.push({'id':4, 'name':'Osmania Biscuits', 'cost':5});
                                            setOsmaniaBiscuits("Osmania Biscuits");
                                            setOsmaniaBiscuitsCost(10);
                                            setOsmaniaBisToggle(!osmaniaBisToggle);
                                            //initModal();
                                        }}
                                    > Order</button>
                                </td>
                            </tr>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td>5.</td>
                                <td>Dry Fruit Biscuits</td>
                                <td>15rs</td>
                                <td>
                                    <button className='btn btn-primary' style={{ widows: '20px', }}
                                        onClick={() => {
                                            // setName('Dry Fruit Biscuits');
                                            //data.push({'id':5, 'name':'Dry Fruit Biscuits', 'cost':15});
                                            setDryFruitBiscuits("Dry Fruit Biscuits");
                                            setDryFruitBiscuitsCost(5);
                                            setDryFruitBisToggle(!dryFruitBisToggle);
                                            //initModal();
                                        }}
                                    > Order</button>
                                </td>
                            </tr>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td>6.</td>
                                <td>Butter Almond Cookies</td>
                                <td>15rs</td>
                                <td>
                                    <button className='btn btn-primary' style={{ widows: '20px', }}
                                        onClick={() => {
                                            //setName('Butter Almond Cookies');
                                            //data.push({'id':6, 'name':'Butter Almond Cookies', 'cost':5});
                                            setButterAlmondCookies("Butter Almond Cookies");
                                            setButterAlmondCookiesCost(10);
                                            setAlmondCookiesToggle(!almondCookiesToggle);
                                            //initModal();
                                        }}
                                    > Order</button>
                                </td>
                            </tr>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td>7.</td>
                                <td>Fruit Biscuits</td>
                                <td>15rs</td>
                                <td>
                                    <button className='btn btn-primary' style={{ widows: '20px', }}
                                        onClick={() => {
                                            //setName('Fruit Biscuits');
                                            //data.push({'id':7, 'name':'Fruit Biscuits', 'cost':5});
                                            setFruitBiscuits("Fruit Biscuits");
                                            setFruitBiscuitsCost(5);
                                            setFruitBisToggle(!fruitBisToggle);
                                            //initModal();
                                        }}
                                    > Order</button>
                                </td>
                            </tr>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td>8.</td>
                                <td>Melting Moment Biscuits</td>
                                <td>15rs</td>
                                <td>
                                    <button className='btn btn-primary' style={{ widows: '20px', }}
                                        onClick={() => {
                                            //setName('Melting Moment Biscuits');
                                            //data.push({'id':8, 'name':'Melting Moment Biscuits', 'cost':5});
                                            setMeltingMomentBiscuits("Melting Moment Biscuits");
                                            setMeltingMomentBiscuitsCost(10);
                                            setMeltingMomentBisToggle(!meltingMomentBisToggle);
                                            //initModal();
                                        }}
                                    > Order</button>
                                </td>
                            </tr>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td>9.</td>
                                <td>Salt Biscuits</td>
                                <td>15rs</td>
                                <td>
                                    <button className='btn btn-primary' style={{ widows: '20px', }}
                                        onClick={() => {
                                            //setName('Salt Biscuits');
                                            //data.push({'id':9, 'name':'Salt Biscuits', 'cost':5});
                                            setSaltBiscuits("Salt Biscuits");
                                            setSaltBiscuitsCost(5);
                                            setSaltBisToggle(!saltBisToggle);
                                            //initModal();
                                        }}
                                    > Order</button>
                                </td>
                            </tr>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td>10.</td>
                                <td>Choco Chips Osmania Biscuits</td>
                                <td>15rs</td>
                                <td>
                                    <button className='btn btn-primary' style={{ widows: '20px', margin: '0px', alignItems: 'center' }}
                                        onClick={() => {
                                            //setName('Choco Chips Osmania Biscuits');
                                            //data.push({'id':10, 'name':'Choco Chips Osmania Biscuits', 'cost':10});
                                            setChocoChipsOsmaniaBiscuits("Choco Chips Osmania Biscuits");
                                            setchocoChipsOsmaniaBiscuitsCost(10);
                                            setChocoChipsToggle(!chocoChipsToggle);
                                            //initModal();
                                        }}
                                    > Order</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='col-lg-2'></div>
                <div className='col-lg-4' ref={componentRef}>
                    {/* <div id='demo'  >
                        <h1> Items Bill :</h1>
                    </div> */}

                    <h2 align='start' style={{ color: "deepskyblue" }}> Items Bill</h2>

                    <Table bordered cellPadding='10' cellSpacing='10' style={{ color: 'orange' }} >
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {
                                data.map((prod, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> {index + 1} </td>
                                            <td> {prod.name} </td>
                                            <td>
                                                <input type='number' className='data-input' onChange={(obj)=>setCount(obj.target.value)} />
                                            </td>
                                            <td> {prod.cost} </td>
                                            <td> {prod.cost*count} </td>
                                            <td>
                                            <button className='btn btn-danger' onClick={deleteData.bind(this, index)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody> */}
                        <tbody>
                            {iraniToggle && (
                                <tr>
                                    <td> 1.</td>
                                    <td> {iraniTea} </td>
                                    <td>
                                        <input type='number' className='data-input' onChange={(e) => setIraniTeaCount(e.target.value)} />
                                    </td>
                                    <td> {iraniTeaCost} </td>
                                    <td>{iraniTeaCost * iraniTeaCount}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                         onClick={()=>{
                                            setIraniToggle(!iraniToggle);
                                         setIraniTeaCount(0);
                                        }}
                                        // onClick={deleteData.bind(this, iraniTea)}
                                        >delete</button>
                                    </td>
                                </tr>
                            )}
                            {masalaToggle && (
                                <tr>
                                    <td> 2.</td>
                                    <td> {masalaTea} </td>
                                    <td>
                                        <input type='number' className='data-input' onChange={(e) => setMasalaTeaCount(e.target.value)} />
                                    </td>
                                    <td> {masalaTeaCost} </td>
                                    <td>{masalaTeaCost * masalaTeaCount}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                         onClick={()=>{
                                            setMasalaToggle(!masalaToggle);
                                            setMasalaTeaCount(0);
                                         }}
                                        >delete</button>
                                    </td>
                                </tr>
                            )}
                            {gingerToggle && (
                                <tr>
                                    <td> 3.</td>
                                    <td> {gingerTea} </td>
                                    <td>
                                        <input type='number' className='data-input' onChange={(e) => setGingerTeaCount(e.target.value)} />
                                    </td>
                                    <td> {gingerTeaCost} </td>
                                    <td>{gingerTeaCost * gingerTeaCount}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                          onClick={()=>{
                                            setGingerToggle(!setGingerToggle);
                                            setGingerTeaCount(0);
                                        }}
                                        >delete</button>
                                    </td>
                                </tr>
                            )}
                            {osmaniaBisToggle && (
                                <tr>
                                    <td> 4.</td>
                                    <td> {osmaniaBiscuits} </td>
                                    <td>
                                        <input type='number' className='data-input' onChange={(e) => setOsmaniaBiscuitsCount(e.target.value)} />
                                    </td>
                                    <td> {osmaniaBiscuitsCost} </td>
                                    <td>{osmaniaBiscuitsCost * osmaniaBiscuitsCount}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                         onClick={()=>{
                                            setOsmaniaBisToggle(!osmaniaBisToggle);
                                            setOsmaniaBiscuitsCount(0);
                                         }}
                                        >delete</button>
                                    </td>
                                </tr>
                            )}
                            {dryFruitBisToggle && (
                                <tr>
                                    <td> 5.</td>
                                    <td> {dryFruitBiscuits} </td>
                                    <td>
                                        <input type='number' className='data-input' onChange={(e) => setDryFruitBiscuitsCount(e.target.value)} />
                                    </td>
                                    <td> {dryFruitBiscuitsCost} </td>
                                    <td>{dryFruitBiscuitsCost * dryFruitBiscuitsCount}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                          onClick={()=>{
                                            setDryFruitBisToggle(!dryFruitBisToggle);
                                            setDryFruitBiscuitsCount(0);
                                          }}
                                        >delete</button>
                                    </td>
                                </tr>
                            )}
                            {almondCookiesToggle && (
                                <tr>
                                    <td> 6.</td>
                                    <td> {butterAlmondCookies} </td>
                                    <td>
                                        <input type='number' className='data-input' onChange={(e) => setButterAlmondCookiesCount(e.target.value)} />
                                    </td>
                                    <td> {butterAlmondCookiesCost} </td>
                                    <td>{butterAlmondCookiesCost * butterAlmondCookiesCount}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                         onClick={()=>{
                                            setAlmondCookiesToggle(!almondCookiesToggle);
                                            setButterAlmondCookiesCount(0);
                                         }}
                                        >delete</button>
                                    </td>
                                </tr>
                            )}
                            {fruitBisToggle && (
                                <tr>
                                    <td> 7.</td>
                                    <td> {fruitBiscuits} </td>
                                    <td>
                                        <input type='number' className='data-input' onChange={(e) => setFruitBiscuitsCount(e.target.value)} />
                                    </td>
                                    <td> {fruitBiscuitsCost} </td>
                                    <td>{fruitBiscuitsCost * fruitBiscuitsCount}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                         onClick={()=>{
                                            setFruitBisToggle(!fruitBisToggle);
                                            setFruitBiscuitsCount(0);
                                         }}
                                        >delete</button>
                                    </td>
                                </tr>
                            )}
                            {meltingMomentBisToggle && (
                                <tr>
                                    <td> 8.</td>
                                    <td> {meltingMomentBiscuits} </td>
                                    <td>
                                        <input type='number' className='data-input' onChange={(e) => setMeltingMomentBiscuitsCount(e.target.value)} />
                                    </td>
                                    <td> {meltingMomentBiscuitsCost} </td>
                                    <td>{meltingMomentBiscuitsCost * meltingMomentBiscuitsCount}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                          onClick={()=>{
                                            setMeltingMomentBisToggle(!meltingMomentBisToggle);
                                            setMeltingMomentBiscuitsCount(0);
                                          }}
                                        >delete</button>
                                    </td>
                                </tr>
                            )}
                            {saltBisToggle && (
                                <tr>
                                    <td> 9.</td>
                                    <td> {saltBiscuits} </td>
                                    <td>
                                        <input type='number' className='data-input' onChange={(e) => setSaltBiscuitsCount(e.target.value)} />
                                    </td>
                                    <td> {saltBiscuitsCost} </td>
                                    <td>{saltBiscuitsCost * saltBiscuitsCount}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                          onClick={()=>{
                                            setSaltBisToggle(!saltBisToggle);
                                            setSaltBiscuitsCount(0);
                                          }}
                                        >delete</button>
                                    </td>
                                </tr>
                            )}
                            {chocoChipsToggle && (
                                <tr>
                                    <td> 10.</td>
                                    <td> {chocoChipsOsmaniaBiscuits} </td>
                                    <td>
                                        <input type='number' className='data-input' onChange={(e) => setChocoChipsOsmaniaBiscuitsCount(e.target.value)} />
                                    </td>
                                    <td> {chocoChipsOsmaniaBiscuitsCost} </td>
                                    <td>{chocoChipsOsmaniaBiscuitsCost * chocoChipsOsmaniaBiscuitsCount}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                         onClick={()=>{
                                            setChocoChipsToggle(!chocoChipsToggle);
                                            setChocoChipsOsmaniaBiscuitsCount(0);
                                         }}
                                        >delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td> Total Cost</td>
                                <td> {iraniTeaCost * iraniTeaCount + masalaTeaCost * masalaTeaCount + gingerTeaCost * gingerTeaCount +
                                    osmaniaBiscuitsCost * osmaniaBiscuitsCount + dryFruitBiscuitsCost * dryFruitBiscuitsCount +
                                    butterAlmondCookiesCost * butterAlmondCookiesCount + fruitBiscuitsCost * fruitBiscuitsCount +
                                    meltingMomentBiscuitsCost * meltingMomentBiscuitsCount + saltBiscuitsCost * saltBiscuitsCount +
                                    chocoChipsOsmaniaBiscuitsCost * chocoChipsOsmaniaBiscuitsCount
                                } </td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </Table>
                    <button className='btn btn-info' onClick={handlePrint}> print</button>
                </div>
                {/* <Modal show={isShow}>
                    <Modal.Header closeButton onClick={inClose}>
                        <Modal.Title> Order Billing </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ fontWeight: 'bold', fontSize: '25' }}>
                        <label> Name : {name}</label> <br />
                        <label> Count : </label> <br />
                        <input type='number' onChange={(e) => {
                            setCount(e.target.value);

                        }} /> <button className='btn btn-info' onClick={() => {
                            setCost(count * value);
                        }}>count</button> <br />
                        <label> Cost  :  {cost}</label>  <br />
                        <label> Time  :{date.toLocaleDateString()} & {date.toLocaleTimeString()}</label>  <br />
                        <button className='btn btn-info' onClick={handlePrint}> Submit</button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={inClose}>
                            Close
                        </Button>
                        <Button variant="dark" onClick={initModal}>
                            Store
                        </Button>
                    </Modal.Footer>
                </Modal> */}
            </div>
        </div>
    )
}

export default Data