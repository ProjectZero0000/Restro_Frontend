import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Paper, Typography, TextField, Button } from "@mui/material";

interface TextFieldData {
  label: string;
  name: string;
}

interface FieldsData {
  heading?: string;
  subheading?:string;
  textFields: TextFieldData[];
  buttonText:string;
}

interface FieldsProps {
  fieldsData: FieldsData;
  onSubmit:(formValues: { [key: string]: string }) => void; 
}

const Fields: React.FC<FieldsProps> = ({ fieldsData,onSubmit }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmitFields = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formValues)
  };

  return (
    <>
      <div className="flex justify-around">
        <Paper elevation={2} square className="p-8 max-w-md w-full">
          <Typography variant="h4" gutterBottom align="center" className="mb-6 font-semibold">
            {fieldsData.heading}
          </Typography>
          <form onSubmit={handleSubmitFields} className="grid gap-4">
            {fieldsData.textFields.map((field, index) => (
              <TextField
                key={index}
                label={field.label}
                name={field.name}
                value={formValues[field.name] || ''}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                size="small"
              />
            ))}
            <Button variant="contained" color="primary" type="submit" fullWidth>
              {fieldsData.buttonText}
            </Button>
          </form>
        </Paper>
      </div>
    </>
  );
};

export default Fields;
