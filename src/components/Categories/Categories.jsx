import { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCategories, getAllSubCategories} from "../../redux/inventory/inventoryOperators";
import { getCategories, getSubCategories } from "../../redux/inventory/inventorySelectors";

function Categories() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const fetchData = async () => {
      console.log('getAllCategories')
      await dispatch(getAllCategories());
      console.log('getAllSubCategories')
            await dispatch(getAllSubCategories());

  }

  // call the function
  fetchData()
    // make sure to catch any error
    .catch(console.error)  
      
  }, [dispatch]);

  const catList = useSelector(getCategories)
  const subCatList = useSelector(getSubCategories)
  console.log(subCatList)
  
     const [category, setCategory] = useState('');

const handleChange = e => {
  setCategory(e.target.value);
  console.log('e.target.value', e.target.value)
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
                           
          
              {catList.length > 0 ? (
                catList.map(function (data, index) {
                  return (
          
                    <MenuItem key={index} value={data.id}>{data.category_name}</MenuItem>
          
                  )
                })
              ) : ""}
        </Select>
      </FormControl>
    </Box>

        </>
    )
}
        
    export default Categories 