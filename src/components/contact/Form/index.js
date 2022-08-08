
import {useState} from 'react'

function Form({addContacts, contacts}) {

const [form ,setform] = useState({fullname:'', phone_number:''});
const onchangeInput = (e)=>{
    setform({...form, [e.target.name] : e.target.value});
}

const onSubmit = (e) =>{
    e.preventDefault();

    if (form.fullname ==='' && form.phone===''){
        return false;
    }
    addContacts([...contacts, form]);
    console.log(form)
    setform({fullname:'', phone:''})

}

  return (
    <div>
        <div>
            <input name="fullname" placeholder='Name' onChange={onchangeInput} value={form.fullname}/>
        </div>
        <div>
            <input name="phone" placeholder='Phone Number' onChange={onchangeInput} value={form.phone}/>
        </div>
        <button onClick={onSubmit}>add</button>
      
      
    </div>
  )
}

export default Form
