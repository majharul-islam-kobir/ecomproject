import React, { useState } from 'react';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleCreateProduct = () => {
    console.log({
      name: productName,
      price: productPrice,
      image: productImage,
    });
    alert('Product Created Successfully!');
    // Reset the fields 
    setProductName('');
    setProductPrice('');
    setProductImage('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Create New Product
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-4"
      >
        <div>
          <label className="block text-gray-600 font-medium mb-2">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-2">Product Price</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Enter product price"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-2">Product Image</label>
          <input
            type="text"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          onClick={handleCreateProduct}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Create New Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
