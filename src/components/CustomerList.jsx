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
    <div>
      <h2>Customer List</h2>
      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              <p>Name: {customer.name}</p>
              <p>Email: {customer.email}</p>
              <p>Phone: {customer.Phone}</p>
              <Link to={`/customers/${customer.id}/edit`}>Edit</Link> {/* Replace with your edit route */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerList;