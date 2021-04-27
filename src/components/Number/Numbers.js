import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialTable from "material-table";
import { Container, Spinner } from 'react-bootstrap';
import { addNumber, availableNumbers, editNumber, deleteNumber } from '../../store/numbersSlice';

import './Numbers.css';

const Numbers = () => {

  const dispatch = useDispatch();

  const {
    isLoading,
    numbers
  } = useSelector(state => state.numbers);

  const data = numbers.map(o => ({ ...o }));

  React.useEffect(() => {
    dispatch(availableNumbers());
  }, [dispatch]);

  const columns = [
    {
      field: 'value',
      title: 'Number'
    }, 
    {
      field: 'currency',
      title: 'Currency',
    },
    {
      field: 'monthyPrice',
      title: 'Monthy Price',
    }, 
    {
      field: 'setupPrice',
      title: 'Setup Price',
    }
  ];

  return (
    <>
      <div className="mt-5 page-numbers pb-2" >
        <Container className="mt-5">
          <h2>Manage the numbers for sale</h2>
        </Container>

        {isLoading ? 
          <Container className="mt-5 text-center">
            <Spinner animation="border" role="loading" className="text-center"/> 
          </Container>
          :
          <Container className="mt-5">
          {data.length > 0 &&
            <MaterialTable
              title="Available Numbers"
              columns={columns}
              data={data}
              editable={{
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const id = data.length + 1 
                      const formatedData = {id, ...newData}
                      dispatch(addNumber(formatedData))
                      
                      resolve();
                    }, 500)
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      dispatch(editNumber(newData))
        
                      resolve();
                    }, 500)
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      dispatch(deleteNumber(oldData.id))
                      
                      resolve()
                    }, 500)
                  }),
              }}
              options={{
                actionsColumnIndex: -1
              }}
          />
          }
        </Container>
        }
      </div>
    </>
  );
}

export default Numbers;
