'use client';
import { useState } from 'react';

const CreatePackingList = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [season, setSeason] = useState('Summer');
  const [tripType, setTripType] = useState('Vacation');
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemCategory, setItemCategory] = useState('Miscellaneous');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/packinglist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, season, tripType, items }),
    });

    if (res.ok) {
      alert('Packing list created successfully!');
      setName('');
      setDescription('');
      setSeason('Summer');
      setTripType('Vacation');
      setItems([]);
    } else {
      alert('Error creating packing list');
      console.log(res)
    }
  };

  const addItem = () => {
    setItems([...items, { name: itemName, quantity: itemQuantity, category: itemCategory, packed: false }]);
    setItemName('');
    setItemQuantity(1);
    setItemCategory('Miscellaneous');
  };

  return (
    <div>
      <h1>Create Packing List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Season:</label>
          <select value={season} onChange={(e) => setSeason(e.target.value)} required>
            <option value="Summer">Summer</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Autumn">Autumn</option>
          </select>
        </div>
        <div>
          <label>Trip Type:</label>
          <select value={tripType} onChange={(e) => setTripType(e.target.value)} required>
            <option value="Vacation">Vacation</option>
            <option value="Business Trip">Business Trip</option>
            <option value="Adventure">Adventure</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <h2>Items</h2>
          <div>
            <label>Item Name:</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div>
            <label>Quantity:</label>
            <input
              type="number"
              value={itemQuantity}
              onChange={(e) => setItemQuantity(Number(e.target.value))}
              min="1"
            />
          </div>
          <div>
            <label>Category:</label>
            <select value={itemCategory} onChange={(e) => setItemCategory(e.target.value)}>
              <option value="Clothing">Clothing</option>
              <option value="Toiletries">Toiletries</option>
              <option value="Electronics">Electronics</option>
              <option value="Documents">Documents</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          </div>
          <button type="button" onClick={addItem}>Add Item</button>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item.name} - {item.quantity} ({item.category})</li>
            ))}
          </ul>
        </div>
        <button type="submit">Create Packing List</button>
      </form>
    </div>
  );
};

export default CreatePackingList;
