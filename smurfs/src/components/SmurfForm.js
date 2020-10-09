import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";


const initialFormValues = {
    name:'',
    age:'',
    height: '',
}


const SmurfForm = (props) => {

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
      const { name, value } = e.target
    setFormValues({...formValues, [name]:value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(formValues)
    setFormValues(initialFormValues)
  };

  return (
    <form className='smurfForm' onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="name"
          name='name'
          onChange={handleChange}
          value={formValues.name}
          placeholder="name"
        />
      </label>

      <label>
        Age:
        <input
          type="text"
          name='age'
          onChange={handleChange}
          value={formValues.age}
          placeholder="age"
        />
      </label>

      <label>
        Height:
        <input
          type="text"
          name='height'
          onChange={handleChange}
          value={formValues.height}
          placeholder="height"
        />
      </label>

      <button>Add Smurf</button>
    </form>
  );
};


export default connect(null, { addSmurf })(SmurfForm);
