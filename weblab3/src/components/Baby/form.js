import React, { useState }from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as actions from '../../actions/baby';

import { Link } from 'react-router-dom';

const BabyForm = ({ onSubmit}) =>{
  const [value1, changeValue1] = useState('');
  const [value2, changeValue2] = useState('');

  return (
    <div className="form">
              <input type="text" placeholder="Name" className="lbl_Name" 
               value={value1}
               onChange={e => changeValue1(e.target.value)}
               />
              <input type="text" placeholder="Last Name" className="lbl_LastName"
              value={value2}
              onChange={e => changeValue2(e.target.value)}
              />
              <Link to="/"><button type="submit" className="btn_addBaby" 
              onClick={() => {onSubmit(uuidv4(), value1, value2 );}}> 
              <label className="addTxt">
                {'+'}
                </label> 
              </button>
              </Link>    
          </div>
  )
};

   const dispatchStateToProps = () => (
     dispatch => ({
       onSubmit(id, name, lastName) {
         dispatch(actions.addBaby(id, name, lastName));
         dispatch(actions.selectBaby(''))
       },
       
     })
   );
   export default connect(undefined, dispatchStateToProps)(BabyForm);
