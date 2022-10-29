import { Form, Button, Select, Input, Table } from "antd"
import Layout from "../../layouts/Layout"
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import './index.css'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const { Option } = Select
export default () => {

  
    const [dep, setdep] = useState([])

    const {id} = useParams()
    

    const getbyid =()=>{
        axios.get(`http://localhost:5000/department/${id}`)
        .then(res => {
          const dep = res.data;
          console.log("dep : ",dep)
          setdep(dep);
        })
    }
    useEffect(() => {
        
        getbyid()

    }, []);

  
  

    const handleChange=(e)=>{
        setdep({
          ...dep,
          [e.target.name]:e.target.value
        })
      }

    const onSubmit =(e)  => {
      e.preventDefault()


        axios.patch(`http://localhost:5000/department/${id}`,dep).then((res) => {
            console.log("data of department", res.data);
            setdep(res.data);
            window.location="/departments"
          }).catch(err=>{
            console.log(err)
            
          
          })

    }
    
    

  



    return (
       
            <div class="container">
  <h2  style={{ display:"flex", alignItems: 'center', justifyContent:"center",color:"red" }}>editer Départment</h2>

  <form className="form-inline" onSubmit={onSubmit} >
    <div className="form-group">
      <label>nom:</label>
     
      <input type="text" className="form-control"  value={dep.name}  name="name" onChange={handleChange}/>
    </div>
    <div class="form-group">
      <label >nombre de employee:</label>
      <input type="text" className="form-control"  value={dep.nb_employer} name="nb_employer" onChange={handleChange}/>
    </div>
    
    <button  type="submit"  shape="round"   style={{ fontSize: '15px' }} className="btn btn-default">editer</button>
  </form>
</div>
        
    )
}