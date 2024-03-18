import { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';


function Categories() {
    const catList = ['Home', 'Furniture', 'Kitchen & Dining', 'Electronics', 'Video Games']

     const [category, setCategory] = useState('');

const handleChange = e => {
    setCategory(e.target.value);
  };
    return (
<>
 <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="category"
              onChange={handleChange}
              style={{ height: 65 }}
        >
                            {catList.map(function (data, index) {
                                return (
          
                                    <MenuItem key={index} value={data}>{data}</MenuItem>
          
                                )
                            })}             
          
        </Select>
      </FormControl>
    </Box>

        </>
    )
}
        
    export default Categories 