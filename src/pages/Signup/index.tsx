import React, { useState } from 'react';
import { TextField, Button, Typography, Paper} from '@mui/material';
interface FormData {
  name: string,
  description: string,
  email: string,
  image: string,
  address: string,
  number: string,
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    email: '',
    image: '',
    address: '',
    number: '', 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <Paper elevation={8} square className="p-8 max-w-md w-full rounded-xl shadow-lg">
        <Typography variant="h4" gutterBottom align="center" className="mb-6 font-semibold">
          Signup
        </Typography>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            size="small"
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            size="small"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            type="email"
            size="small"
          />
          <TextField
            label="Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            size="small"
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            size="small"
          />
          <TextField
            label="Number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            type="number"
            size="small"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Signup;
