import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const programs=[
    'Data Science & AI',
    'Product Management',
    'Business Analytics',
    'Digital Transformation',
    'Business Management',
    'Project Management',
    'Strategy & Leadership',
    'Senior Management',
    'Fintech'
    
]

const Footer = () => {
  return (
   <div className='bg-slate-900 text-white md:px-[15%] px-[5%] '>
    <div className='flex md:flex-row flex-col justify-between pt-10 pb-5 border-b-2'>
       <div className='text-center'>
        <p className='md:font-bold text-3xl'>accredian</p>
        <p className='text-xs  '>credentials that matter</p>
       </div>
       <div className='text-center'>
        <button className='border border-white bg-blue-600 font-medium px-8 py-3 rounded-md'>Schedule 1-on-1 Call Now</button>
        <p className='text-sm'>Speak with our Learning Advisor</p>
       </div>
    </div>

    <div className='flex md:flex-row flex-col mb-7 gap-6'>
        <div className='md:w-1/3'>
            <p className='p-5'>Programs</p>
            <div>
                {programs.map((details,index)=>(
                <Accordion style={{backgroundColor: 'rgb(15 23 42)', color:'white'}}>
                <AccordionSummary
                  expandIcon={<AddIcon style={{color:'white'}} />}
                  aria-controls="panel1-content"
                  id={index}
                >
                  <Typography>{details}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                 
                </AccordionDetails>
              </Accordion>
                ))}
          
     
    </div>
        </div>
        <div className='text-sm leading-7'>
            <p className='py-5 text-lg'>Contact Us</p>
            <p >Email us (For Data Science Queries):admissions@accredian.com</p>
            <p>Email us (For Product Management Queries):pm@accredian.com</p>
            <p>Data Science Admission Helpline:+91 9079653292 (9AM - 7PM)</p>
           
            <p>Product Management Admission Helpline:+91 9625811095</p>
            <p>Enrolled Student Helpline: +91 7969322507</p>
            <p>Office Address: 4th Floor,250,Phase IV, Udyog Vihar,Sector 18,Gurugram,Haryana 122015</p>
            <p className='py-1 text-xl'>Why Accredian</p>
            <p className='py-2 text-xl'>Follow Us</p>
            <div className='flex flex-row gap-3'>
                <FacebookIcon/>
                <LinkedInIcon/>
                <XIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
            </div>
        </div>
        <div className='text-sm leading-6'>
            <p className='py-4 text-lg'>Accredian</p>
            <div className='flex flex-col'>
                <a href="">About</a>
                <a href="">Career</a>
                <a href="">Blog</a>
                <a href="">Admission Policy</a>
                <a href="">Referral Policy</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms of Service</a>
                <a href="">Master FAQs</a>
            </div>
        </div>
       
    </div>
    <div className='text-center p-8'>&copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd.All Rights Reserved</div>
   </div>
  )
}

export default Footer