import { useState } from 'react'
import heroimg from '../src/assets/refer-and-earn.jpg'
import './App.css'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import axios from 'axios';

function App() {
 const [open,setOpen]=useState(false);


const formik=useFormik({
initialValues:{
  referrerName:'',
  referrerEmail:'',
  refereeName:'',
  refereeEmail:'',
  course:'',
},
validationSchema:Yup.object({
  referrerName:Yup.string().required('Required'),
  referrerEmail:Yup.string().email('Invalid email address').required('Required'),
  refereeName:Yup.string().required('Required'),
  refereeEmail:Yup.string().email('Invalid email address').required('Required'),
  course:Yup.string().required('Required')
}),
onSubmit: async (values, { setSubmitting, resetForm })=>{
  console.log(values);
  try {
    const response = await axios({
      method:'post',
      url:'https://accredian-backend-task-4bfu.onrender.com/api/referral',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }); 
    console.log(response);
    resetForm();
    handleClose();
  } catch (error) {
   console.log(error);
  } 
  
},

})

 const handleOpen=()=>setOpen(true);
 const handleClose=()=>setOpen(false);



  return (
    <>
    
     <div className='flex md:flex-row flex-col justify-center text-center gap-3 bg-blue-50 p-2' > <p className='md:text-md text-sm '>Navigate your ideal career path with tailored expert advice</p><button className='text-blue-700 font-medium md:text-md text-sm'>Contact Expert</button> </div>
     
    <Navbar/>
    <div className='flex flex-col md:flex-row m-[5%] justify-around border shadow-2xl'>
      <div className='mt-[10%] ml-[5%]'> <h2 className='font-semibold text-xl md:text-3xl py-7'>Let's Learn <br /> & Earn</h2>
      <p>Get a chance to win upto <span className='font-semibold text-xl'>Rs. 15,000</span></p>
      <button className='bg-blue-600 text-white rounded p-3 my-6' onClick={handleOpen}>Refer Now</button>
      </div>
      <img src={heroimg} className='lg:h-full md:h-[350px]' alt="" />
       </div>

       <div className='how text-black'>
        <p className='text-xl text-center p-7 text-white'> How Do I Refer?</p>
        <div className='flex md:flex-row gap-[10%] flex-col p-[5%] items-center justify-center'>
        <div className='p-4'>
          <div className=' h-[200px] w-[200px] text-md p-2 text-center flex flex-col items-center justify-center rounded-full bg-white bg-opacity-100 '><PersonAddAltIcon style={{fontSize:50, color:'blue'}}/><p>Submit referrals easily via our website's referral section.</p></div>
        </div>
        <div className='p-4'>
          <div className='h-[200px] w-[200px] text-md p-2 text-center flex items-center justify-center rounded-full flex-col bg-white bg-opacity-100 '><EditNoteIcon style={{fontSize:50, color:'blue'}}/> <p>Enter reward once your referral joins an Accredian program.</p></div>
        </div>
        <div className='p-4'>
          <div className='h-[200px] w-[200px] text-md p-2 text-center flex items-center flex-col justify-center rounded-full bg-white bg-opacity-100'> <CardGiftcardIcon style={{fontSize:50, color:'blue'}}/><p>Both parties receive a bonus 30 days after program enrollment</p></div>
        </div>
        </div>
        <div className='text-center'> <button onClick={handleOpen} className='text-blue-900 bg-white font-semibold  rounded p-3 my-6'>Refer Now</button> </div>
       </div>
       <Modal open={open} onClose={handleClose}>
        <Box sx={{ width: 400, margin: 'auto', marginTop: '6%', padding: 4, backgroundColor: 'white' }}>
          <p>Referral Form</p>
          <TextField label="Referrer Name"
           id='referrername'
            name="referrerName"
        
           value={formik.values.referrerName}
              onChange={formik.handleChange}
              error={formik.touched.referrerName && Boolean(formik.errors.referrerName)}
              helperText={formik.touched.referrerName && formik.errors.referrerName}
             fullWidth margin="normal" required />
          <TextField label="Referrer Email"
          id="referrerEmail"
          name="referrerEmail"
         
          value={formik.values.referrerEmail}
          onChange={formik.handleChange}
          error={formik.touched.referrerEmail && Boolean(formik.errors.referrerEmail)}
          helperText={formik.touched.referrerEmail && formik.errors.referrerEmail}
          fullWidth margin="normal" required />
          <TextField label="Referee Name" 
          id="refereeName"
          name="refereeName"
          value={formik.values.refereeName}
          onChange={formik.handleChange}
          error={formik.touched.refereeName && Boolean(formik.errors.refereeName)}
          helperText={formik.touched.refereeName && formik.errors.refereeName}
          
          fullWidth margin="normal" required />
          <TextField label="Referee Email"
           id="refereeEmail"
           name="refereeEmail"
           
           value={formik.values.refereeEmail}
           onChange={formik.handleChange}
           error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
           helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
          
          fullWidth margin="normal" required />
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="course-select-label">Select Course</InputLabel>
            <Select
              labelId="course-select-label"
              id="course-select"
              name='course'
              value={formik.values.course}
              onChange={formik.handleChange}
              error={formik.touched.course && Boolean(formik.errors.course)}
             
              label="Select Course"
            >
              <MenuItem value="Data-Science">Data Science</MenuItem>
              <MenuItem value="Product Management">Product Management</MenuItem>
              <MenuItem value="Machine Learning">Machine Learning</MenuItem>
              
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={formik.handleSubmit} fullWidth>Submit</Button>
        </Box>
      </Modal>
      
   
    <Footer/>
    </>
  )
}

export default App
