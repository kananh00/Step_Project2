import React, { useState, useEffect } from "react";
import styled from 'styled-components';
export const Create = ({ history: { push }}) => {

  const [fields, setFields] = useState({
    title: "",
    text: "",
    color: "#FFB6C1",
    date: Date.now(),
    status: "active"
  });

  const onChange = async (e) => {
    const { name, value } = e.target;
    setFields(fields => ({
      ...fields,
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    createNewNote(fields);
    push("/");
  };

  
  const createNewNote = async ({ title, text, color, date, status}) => {
      const res = await fetch("http://localhost:3001/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, text, color, date, status })
      });
  };

return (
    <CreateWindow onSubmit = {(e) => onSubmit(e)}>
        <Input type = "text" name = "title"  value = {fields.title}  onChange = {onChange}/>
        <Textarea type = "text" name = "text" value = {fields.text} onChange = {onChange}/>

        <SelectionColor>
        <p className = "color_name">Color: </p>
            <ColorRadioLabel color = "#C71585">
                <input type = "radio" name = "color" value = "#C71585" сhecked = {fields.color === "#C71585"} onChange = {onChange}/>
                <span></span>
            </ColorRadioLabel>
            <ColorRadioLabel color = "#800000">
                <input type = "radio" name = "color" value = "#800000" сhecked = {fields.color === "#800000"} onChange = {onChange}/>
                <span></span>
            </ColorRadioLabel>
            <ColorRadioLabel color = "#FF6347">
                <input type = "radio" name = "color" value = "#FF6347" сhecked = {fields.color === "#FF6347"} onChange = {onChange}/>
                <span></span>
            </ColorRadioLabel>
            <ColorRadioLabel color = "#008B8B">
                <input type = "radio" name = "color" value = "#008B8B" сhecked = {fields.color === "#008B8B"} onChange = {onChange}/>
                <span></span>
            </ColorRadioLabel>
        </SelectionColor>
        <CreateBtn>Create</CreateBtn> 
    </CreateWindow>  
    
)
}


const CreateWindow = styled.form`
background-color: rgb(255,215,0);
width: 500px;
height: 600px;
border-radius: 10px;
margin: 50px auto;
padding: 30px;

`;
const Input = styled.input`
    width: 100%;
    background-color: rgb(245,245,245);
    display: block;
    border: 2px solid transparent;
    padding: 10px;
    border-radius: 5px;
    outline: none;
`;
const Textarea = styled.textarea`
    width: 100%;
    height: 400px;
    background-color: rgb(245,245,245);
    display: block;
    border: 2px solid transparent;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    margin-top: 10px;
    resize: none;
`;
const SelectionColor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
    .color_name {
        font-size: 25px;
        font-weight: bold;
        color: 	rgb(128,128,128);
        margin: 0 10px;
    }
    `;
    const ColorRadioLabel = styled.label`
    input {
        display: none;

    }
    span {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin: 0 10px;
        background-color: ${p => p.color};
        border: 8px solid transparent;
        transition: all .3s ease;
        cursor: pointer;
    }
    input:checked + span {
        border-color: ${p => p.color};
        background-color: white;
    }
    `;
const CreateBtn = styled.button`
width: 100%;
background-color: rgb(245,245,245);
display: block;
border: 2px solid transparent;
padding: 10px;
border-radius: 5px;
outline: none;
text-transform: uppercase;
font-weight: bold;
background-color: 	#228B22;
color: white;
`;