import React, { useState } from 'react';
import Fields from '../../../components/Fields';

interface MenuData {
  productName: string;
  description: string;
  price: number;
  image: string;
}

const Order: React.FC = () => {

  const [menuData, setMenuData] = useState<MenuData>({
    productName: '',
    description: '',
    price: 0,
    image: ''
  });
  const MenufieldsData = {
    heading: 'Add New Menu Item',
    textFields: [
      { label: 'Product Name', name: 'product_name' },
      { label: 'Description', name: 'Product_description' },
      { label: 'Price', name: 'price' },
      { label: 'Image URL', name: 'image' }
    ],
    buttonText: 'Add Product'
  };

  const handleSubmitFields = (formValues: { [key: string]: string | number}) => {
    console.log('need to post this into Order backend', formValues);
    setMenuData(preData => ({
      ...preData,
      productName: formValues.productName as string,
      description: formValues.description as string,
      price: formValues.price as number,
      image: formValues.image as string
    }))
    
    //now need to post data of MenuData to api here
    console.log(menuData);

  };

  return (
    <div className="flex justify-around">
      <Fields fieldsData={MenufieldsData} onSubmit={handleSubmitFields} />
      {/* need to make Preview component */}
    </div>
  );
};

export default Order;
