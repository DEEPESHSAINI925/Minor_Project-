import React, { useContext, useEffect, useState } from 'react'
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import { Phone, Mail, MapPin, User, Briefcase, Info, Locate } from 'lucide-react';
import Testimonials from './Testimonials'
import UserContext, { userDataContext } from '../../Context/UserContext'
import axios from 'axios';
import { useAsyncError } from 'react-router-dom';

const LawyerCard = ({ lawyer }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Profile Picture Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={lawyer.profilePicture || '/default-lawyer.jpg'} 
          alt={`${lawyer.firstName} ${lawyer.lastName}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h2 className="text-white text-xl font-semibold">
            {lawyer.firstName} {lawyer.lastName}
          </h2>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 space-y-3">
        {/* Lawyer Type & Specialization */}
        <div className="flex items-center space-x-2 text-gray-600">
          <Briefcase className="w-5 h-5" />
          <span className="font-medium">{lawyer.lawerType}</span>
        </div>
        {/* Location */}
        <div className="flex items-start space-x-2 text-gray-600">
          <Locate className="w-5 h-5 mt-1 flex-shrink-0" />
          <p className="text-sm line-clamp-2">{lawyer.city}, {lawyer.area}</p>
        </div>

        {/* Short Description */}
        <div className="flex items-start space-x-2 text-gray-600">
          <Info className="w-5 h-5 mt-1 flex-shrink-0" />
          <p className="text-sm line-clamp-2">{lawyer.shortDescription}</p>
        </div>
        {/* Contact Information */}
        <div className="space-y-2 pt-2 border-t">
          {/* Phone */}
          <div className="flex items-center space-x-2 text-gray-600">
            <Phone className="w-4 h-4" />
            <a href={`tel:${lawyer.phone_No}`} className="text-sm hover:text-blue-600">
              {lawyer.phone_No}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${lawyer.email}`} className="text-sm hover:text-blue-600 truncate">
              {lawyer.email}
            </a>
          </div>
          
        </div>
        

        {/* Action Buttons */}
        <div className="flex gap-2 pt-3">
          <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Contact Now
          </button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchingLawer = () => {
  const [lawyers, setlawyers] = useState(null)
    const [scrollY, setScrollY] = useState(0)
    const [page, setpage] = useState(1)
    const [TotalPage, setTotalPage] = useState(0)
    const userData=useContext(userDataContext)
    const [city, setCity] = useState("")
    const [lawerType,setlawerType]=useState("")
    
    useEffect(() => {
          setTotalPage(Math.ceil(lawyers?.length / 10))
        // Add scroll event listener
        const handleScroll = () => {
          setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
    },[])

    useEffect(()=>{
       const ss=async ()=>{
    const responce=await axios.get(`http://localhost:3030/api/lawyer/search/all`,
        {withCredentials:true}
    )
    if(responce.status==201){
      setlawyers(responce.data.data.lawyers)
    }
  }
  ss()
    },[])

    

  
  const submitHandler=async()=>{
    const responce=await axios.post(`http://localhost:3030/api/lawyer/search`,{
      city:city.toLowerCase(),
      lawyerType:lawerType.toLowerCase()
    },{
          headers: {
            'Content-Type': 'application/json',
            "authorization":`Bearer ${sessionStorage.getItem("token")}`
            
          }
        },
        {withCredentials:true}
    )
    if(responce.status==201){
      setlawyers(responce.data.data.lawyers)
    }
  }
 

  return (
  
    <div >
      <Header scrollY={scrollY} />
      <Testimonials />
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-center my-10'>Find Your Legal Representative</h1>
        <p className='text-center mb-8 text-gray-600'>Connect with experienced lawyers in your area</p>
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-2 max-w-3xl mx-auto mb-3">
            <input
              type="text"
              placeholder="Search by Location and Name ."
              className="search flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={city}
              onChange={(e)=>{setCity(e.target.value)}}
            />
            <button className='px-4 py-2 rounded-md bg-blue-500 mr-3 text-sm text-center text-white' onClick={submitHandler}>Search</button>
            <select className="p-3 border rounded-lg bg-white"
            value={lawerType}
            onChange={(e)=>{
              setlawerType(e.target.value)
            }}
            >
              <option value="">All Specializations</option>
              <option value="criminal">Criminal Law</option>
              <option value="civil">Civil Law</option>
              <option value="corporate">Corporate Law</option>
            </select>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
        </div>
        </div>

      
        {/* Lawyers Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {lawyers?.slice((page - 1) * 9, page * 9).map((lawyer, index) => (
                <LawyerCard key={index} lawyer={lawyer} />
            ))}
        </div>
      </div>

        <div className='flex justify-center mt-8'>
        <button onClick={() => setpage(page - 1)} className={`px-3 mb-2 py-1 mx-1 rounded-lg text-sm bg-gray-200 text-gray-700 ${page === 1 ? 'hidden' : ''}`}
                    >
                    pre...
                    </button>
            {
                Array.from({ length: TotalPage }, (s, index) => (
                    
                    <button
                    key={index}
                    onClick={() => setpage(index + 1)}
                    className={`px-4 mb-2 py-2 mx-1 rounded-lg ${page === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                    {index + 1}
                    </button>
                ))
            }
            <button onClick={() => setpage(page + 1)} className={`px-3 mb-2 py-1 mx-1 rounded-lg text-sm bg-gray-200 text-gray-700 ${page === TotalPage ? 'hidden' : ''}`}
                    >
                    Next...
                    </button>
        </div>
      <Footer />
    </div>

  );
};

export default SearchingLawer;