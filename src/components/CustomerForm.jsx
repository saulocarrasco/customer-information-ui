import React, { useState } from 'react';
import CustomerService from '../core/CustomerService';

function CustomerForm() {

    var customer = {
    };

    const [firstName, setName] = useState(customer.firstName);
    const [lastName, setLastName] = useState(customer.lastName);
    const [email, setEmail] = useState(customer.email);
    const [phone, setPhone] = useState(customer.phone);
    const [addresses, setAddresses] = useState(customer.addresses || []);

    function onSubmitHandler(event){
        event.preventDefault();
        customer.firstName = firstName;
        customer.lastName = lastName;
        customer.email = email;
        customer.phone = phone;
        customer.addresses = addresses;
        CustomerService.add(customer);
    }

  const handleAddressChange = (index, address) => {
    setAddresses([
      ...addresses.slice(0, index),
      address,
      ...addresses.slice(index + 1),
    ]);
  };

  const handleAddAddress = () => {
    setAddresses([...addresses, { street: '', city: '', state: '', country: '' }]);
  };

  const handleRemoveAddress = (index) => {
    setAddresses([...addresses.slice(0, index), ...addresses.slice(index + 1)]);
  };

  return (
    <form onSubmit={onSubmitHandler}>
        <h2>Customer</h2>
      <label>
        Name:
        <input type="text" value={firstName} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        LastName:
        <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <h2>Addresses</h2>
      {addresses.map((address, index) => (
        <div key={index}>
          <label>
            Street:
            <input
              type="text"
              value={address.street}
              onChange={(event) =>
                handleAddressChange(index, { ...address, street: event.target.value })
              }
            />
          </label>
          <label>
            City:
            <input
              type="text"
              value={address.city}
              onChange={(event) =>
                handleAddressChange(index, { ...address, city: event.target.value })
              }
            />
          </label>
          <label>
            State:
            <input
              type="text"
              value={address.state}
              onChange={(event) =>
                handleAddressChange(index, { ...address, state: event.target.value })
              }
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              value={address.country}
              onChange={(event) =>
                handleAddressChange(index, { ...address, country: event.target.value })
              }
            />
          </label>
          <br/>
          <label>
            Postal Code:
            <input
              type="text"
              value={address.postalCode}
              onChange={(event) =>
                handleAddressChange(index, { ...address, postalCode: event.target.value })
              }
            />
          </label>
          <button type="button" onClick={() => handleRemoveAddress(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddAddress}>
        Add Address
      </button>
      <button type="submit">Save</button>
    </form>
  );
}

export default CustomerForm;
