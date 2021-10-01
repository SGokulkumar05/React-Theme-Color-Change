import React ,{useState}from 'react';
import { SketchPicker } from 'react-color';
import { makeStyles } from "@material-ui/core/styles";


export default function Color() {
    const UseStyles = makeStyles((theme) => ({
        body: {
          backgroundColor:color,
          height:609
        },
    }));

    const [color,setcolor]=useState('#D11515');
    const classes = UseStyles();
    const handleChangeComplete = (c) => {
        setcolor(c.hex);
        localStorage.setItem("hexatheme",c.hex)
        console.log(color);
    };
    return(
    <div className={classes.body}> 
        <SketchPicker 
             color={ color }
            onChangeComplete={handleChangeComplete}
        />
    </div>
    );
}