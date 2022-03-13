import {useEffect, useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButtonList = ({title,list,onChange}) => {

  let [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value)
  };






  return (
    <FormControl>
      <FormLabel >{title}</FormLabel>
      <RadioGroup
        defaultValue=""
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}

      >
         {
             list.map((l,index)=>{
                 return (<FormControlLabel key = {index} value={l.id} control={<Radio />} label={l.name} />
                 )
             })
         } 
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonList;