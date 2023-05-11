import React, { useState, useEffect } from 'react';
import CustomerService from '../core/CustomerService';
import { Link } from 'react-router-dom';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    CustomerService.getAll().then(response=>{
        setCustomers(response.data.result);
    })
  }, []);

  return (
    <div style={{margin: 'auto', width: '80%'}}>
      <h2>Customer List</h2>
      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td><Link to={`/customer/${customer.id}`}>Edit</Link></td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomerList;