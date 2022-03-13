import  React , {useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

const MultiSelectCheckBoxList = ({title,list,onCheck}) => {
  
    const [checked, setChecked] = React.useState({});

    const handleToggle = (value) => () => {

      
      if(checked[value]) {
        let newChecked = {...checked}
        delete newChecked[value]
        setChecked(newChecked);
      } else {

        let newChecked = {...checked}
        newChecked[value] = true
        setChecked(newChecked);


      }


  };

  useEffect(()=>{


    if(onCheck) {
       onCheck(checked)
     }


  },[checked])

  return (
    <React.Fragment>
     <div style={{margin:'12px'}}> 
    <Typography variant="body1">{title}</Typography>
    <List>
      {list.map((l,index) => {
        const labelId = `checkbox-list-label-${l.id}`;
        return (
          <ListItem
            key={index}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(l.id)} >
                <Checkbox
                  edge="start"
                  checked={checked[l.id]===true?true:false}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              <ListItemText id={labelId} primary={l.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </div>
    </React.Fragment>
  );
}


export default MultiSelectCheckBoxList