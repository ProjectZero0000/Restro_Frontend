import React, { useState,useEffect } from 'react';
import Fields from '../../components/Fields';

interface SignupData {
  restaurantName: string;
  restaurantDescription: string;
  email: string;
  contact: number;
  address: string;
  logo: string;
  adminUser: string;
  password: string;
}

const Signup: React.FC = () => {
  const [restaurantDataFlag, setRestaurantDataFlag] = useState<boolean>(false);
  const [signupData, setSignupData] = useState<SignupData>({
    restaurantName: '',
    restaurantDescription: '',
    email: '',
    contact: 0,
    address: '',
    logo: '',
    adminUser: '',
    password: ''
  })

  const RestaurtantFieldsData = {
    heading: 'Create your new Account',
    subHeading: 'Restaurant Details',
    textFields: [
      { label: 'Restaurant Name', name: 'restaurant_name' },
      { label: 'Restaurant Description', name: 'restaurant_description' },
      { label: 'Email', name: 'email' },
      { label: 'Contact', name: 'contact' },
      { label: 'Address', name: 'Address' },
      { label: 'Restaurant Logo', name: 'image' }
    ],
    buttonText: 'Next'
  };

  const AdminUserData = {
    subHeading: 'User Details',
    textFields: [
      { label: 'Admin User', name: 'admin' },
      { label: 'Password', name: 'Password' },
    ],
    buttonText: 'Submit'
  };

  const handleSubmitSignupRestaurantFields = (formValues: { [key: string]: string | number }) => {
    console.log('RestaurantDetails', formValues);
    setSignupData(preData => ({
      ...preData,
      restaurantName: formValues.restaurantName as string,
      restaurantDescription: formValues.restaurantDescription as string,
      email: formValues.email as string,
      contact: formValues.contact as number,
      address: formValues.address as string,
      logo: formValues.logo as string
    }));
    setRestaurantDataFlag(true);
  };

  const handleSubmitSignupUserFields = (formValues: { [key: string]: string }) => {
    console.log('Userdetails', formValues);
    setSignupData(preData => ({
      ...preData,
      adminUser: formValues.adminUser,
      password: formValues.password
    }));
    //now need to post data of SignupData to api here
    console.log(signupData);
    setRestaurantDataFlag(false);
  };

  useEffect(() => {  
    return () => {
    }
  }, [restaurantDataFlag])
  

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      {restaurantDataFlag ?
        <Fields fieldsData={AdminUserData} onSubmit={handleSubmitSignupUserFields} />:
        <Fields fieldsData={RestaurtantFieldsData} onSubmit={handleSubmitSignupRestaurantFields} /> 
      }
    </div>
  );
};

export default Signup;
