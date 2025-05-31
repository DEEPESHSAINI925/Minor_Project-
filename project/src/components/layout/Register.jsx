import React, { useState, useRef, useContext } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Upload, Briefcase, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  { userDataContext } from '../../Context/UserContext';
import { lawyerDataContext } from '../../Context/LawyerContext';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('')
  const [city, setCity] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [lawerType, setLawerType] = useState('');
  const [phone_No, setphone_No] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState('user'); // 'user' or 'lawyer'
  const [profilePicture, setProfilePicture] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);

  const {setUserData}=useContext(userDataContext)
  const {setLawyerData}=useContext(lawyerDataContext)
  const navigate=useNavigate() 

  const steps = {
    1: {
      title: "Basic Information",
      description: "Let's start with your personal details"
    },
    2: {
      title: "Account Type",
      description: "Choose your role and upload a profile picture"
    },
    3: {
      title: "Contact Details",
      description: "Add your email address"
    },
    4: {
      title: "Security",
      description: "Create a secure password"
    }, 
    
    5: {
      title: "Location Details",
      description: "Add your location details"
    },
    6: {
      title: "Personal Details",
      description: "Add your personal details"
    }

  };

  const ProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {Object.keys(steps).map((step) => (
          <motion.div
            key={step}
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: currentStep >= parseInt(step) ? 1 : 0.8,
              backgroundColor: currentStep >= parseInt(step) ? '#2563eb' : '#e5e7eb'
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
              ${currentStep >= parseInt(step) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            {step}
          </motion.div>
        ))}
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <motion.div
          className="absolute left-0 top-0 h-full bg-blue-600 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentStep - 1) / (Object.keys(steps).length - 1)) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{steps[currentStep].title}</h3>
        <p className="text-sm text-gray-600">{steps[currentStep].description}</p>
      </div>
    </div>
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!firstName.trim()) {
      newErrors.name = 'FirstName is required';
    }
    
    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        console.log( firstName,
          lastName,
          email,
          password,
          profilePicture,
          area,
          city,
          shortDescription,
          longDescription,
          lawerType,
          phone_No)
        const response=await axios.post(`http://localhost:3030/api/${userType}/register`, {
          firstName,
          lastName,
          email,
          password,
          profilePicture,
          area,
          city,
          shortDescription,
          longDescription,
          lawerType,
          phone_No
        },{
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if(response.status === 200) {
          console.log(response)
          sessionStorage.setItem("token",response.data?.token)
         if(userType==="lawyer"){
            setLawyerData(response.data?.lawyer)
            sessionStorage.setItem("lawyer",JSON.stringify(response.data?.lawyer))
          }else{
            setUserData(response.data?.user)
            sessionStorage.setItem("user",JSON.stringify(response.data?.user))
          }
          alert('Registration successful!');
          navigate("/search/lawer")
          // Redirect or perform any other action
        }
      } catch (error) {
        console.error('Registration error:', error);
        setErrors({ 
          auth: 'Registration failed. This email may already be in use.' 
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
          >
            {/* Name Input */}
            <div className="group relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-input block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="John"
                />
              </div>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-xs mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </div> <div className="group relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-input block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder=" Doe"
                />
              </div>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-xs mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
          >
            {/* User Type and Profile Picture */}
            <div className="space-y-4">
              {/* User Type Selection */}
              <div className="group relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  I am a
                </label>
                <div className="relative">
                  <select
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="form-select block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  >
                    <option value="user">user</option>
                    <option value="lawyer">lawer</option>
                  </select>
                </div>
              </div>

              {/* Profile Picture Upload */}
              <div className="group relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Picture
                </label>
                <div className="relative">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      className="flex items-center px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                    >
                      <Upload className="mr-2 text-gray-400" size={18} />
                      Upload
                    </button>
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Profile Preview"
                        className="ml-4 w-10 h-10 rounded-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
          >
            {/* Email Input */}
            <div className="space-y-4">
              <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  id="reg-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
          >
            {/* Password Fields */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="reg-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`block w-full pl-10 pr-10 py-2 border ${
                      errors.password ? 'border-red-300' : 'border-gray-300'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff size={18} className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye size={18} className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="confirm-password"
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`block w-full pl-10 pr-3 py-2 border ${
                      errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-600 text-xs mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            </div>
          </motion.div>
        );
       case 5:
      return userType === 'lawyer'? (
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
        >
          <div className="space-y-4">
            {/* Location Details */}
            <div className="group relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your city"
              />
            </div>

            <div className="group relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Area/Location
              </label>
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your area"
              />
            </div>

            <div className="group relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={phone_No}
                onChange={(e) => setphone_No(e.target.value)}
                className="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your license number"
              />
            </div>
          </div>
        </motion.div>
      ):(<h1 className='text-center'>Only for Lawer </h1>)

    case 6:
      return userType === 'lawyer' ? (
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
        >
          <div className="space-y-4">
            <div className="group relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Specialization
              </label>
              <select
                value={lawerType}
                onChange={(e) => setLawerType(e.target.value)}
                className="form-select block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select specialization</option>
                <option value="criminal">Criminal Law</option>
                <option value="civil">Civil Law</option>
                <option value="corporate">Corporate Law</option>
                <option value="family">Family Law</option>
                <option value="property">Property Law</option>
                <option value="tax">Tax Law</option>
              </select>
            </div>

            <div className="group relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short Description
              </label>
              <input
                type="text"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                className="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Short Desriptions"
              />
            </div>

            <div className="group relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Professional Description
              </label>
              <textarea
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
                rows={4}
                className="form-textarea block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Brief description of your practice and expertise"
              />
            </div>
          </div>
        </motion.div>
      ):(<h1 className='text-center'>Only for Lawer </h1>)
        

      default:
        return null;
    }
  };

  const nextStep = () => {
    if (currentStep < Object.keys(steps).length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), 
           url('/images/law-background.jpg')`
         }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full mx-4 p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl"
      >
        <ProgressBar />

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </button>
            )}
            
            {currentStep < Object.keys(steps).length ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 ml-auto"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 ml-auto"
              >
                {isLoading ? 'Creating Account...' : 'Complete Registration'}
              </button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;