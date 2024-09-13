import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../utilities/loading';
import emailjs from 'emailjs-com'; // Import EmailJS
// import { sendEmail } from '../utilities/email'; // Import the sendEmail function

interface FormData {
    name: string;
    email: string;
    mobile: string;
    biodata: File | null;
}


interface FormErrors {
    name?: string;
    email?: string;
    mobile?: string;
    biodata?: string;
}

export default function ContactUs() {
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        mobile: '',
        biodata: null,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value, files } = e.target;
        setFormData({
            ...formData,
            [id]: files ? files[0] : value,
        });
    };

    const validateForm = (): boolean => {
        let formErrors: FormErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.mobile) formErrors.mobile = 'Mobile number is required';
        if (!formData.biodata) formErrors.biodata = 'Biodata is required';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (validateForm()) {
            setLoading(true); // Show loading animation
    
            try {
                // Create a FormData object to hold the form data
                const formDataToSend = new FormData();
                formDataToSend.append('name', formData.name);
                formDataToSend.append('email', formData.email);
                formDataToSend.append('mobile', formData.mobile);
                
                if (formData.biodata) {
                    formDataToSend.append('biodata', formData.biodata); // Append the file if it exists
                }
    
                const api_url = process.env.SEND_EMAIL_URL || "https://complaint.smartmaheshwari.com/sendEmail";
                const token = process.env.TOKEN || "maheshwari"; // Replace "default-token" with a suitable default

                console.log(process.env.SEND_EMAIL_URL)
    
                // Type assertion to tell TypeScript that api_url is a string
                const response = await fetch(api_url as string, {
                    method: "POST",
                    headers: {
                        'Authorization': `maheshwari`, // Add the token here
                    },
                    body: formDataToSend, // Send the FormData object directly
                });
    
    
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
    
                if(response.ok) {
                    setIsSubmitted(true);
                    toast.success("Form submitted successfully!");
                }
    
            } catch (error) {
                console.error('Error submitting form', error);
                setErrors({ biodata: 'Error submitting form' });
                toast.error("Error sending email");
            } finally {
                setLoading(false); // Hide loading animation
            }
        }
    };
    

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="min-h-screen flex justify-center pt-32 bg-pink-100 relative pattern">
                    <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-pink-100 opacity-75"></div>
                    <div className="w-full flex flex-col gap-4 z-10">
                        <h2 className="text-4xl font-bold mb-6 text-center text-gray-600 px-10">We've been waiting for you.</h2>
                        <p className="text-center mb-6 text-gray-600 px-10">We want to hear from you. Let us know how we can help.</p>
                        <div className="w-full flex flex-col items-center gap-5 relative rounded pb-8 overflow-hidden">
                            <div className="absolute -top-20 opacity-70 -z-10">
                                <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="translate(300,300)">
                                        <path d="M150,-180C194.6,-154.5,226.6,-97.7,224.8,-46.8C223,-4.1,187.4,39.6,160.2,79.2C133,118.9,114.2,154.5,86.1,179.7C58,204.9,29,219.7,-3.1,226.8C-35.3,234,-70.6,233.5,-102.5,219.3C-134.4,205.1,-163,177.2,-187.1,142.1C-211.3,107,-231,-43.7,-208.2,-85.4C-185.5,-127.2,-120.3,-160,-64.2,-185.6C-8.1,-211.2,40.8,-229.6,89.6,-224.6C138.4,-219.6,191.1,-191.5,150,-180Z" fill="#d6d7d1"/>
                                    </g>
                                </svg>
                            </div>
                            <h2 className="font-bold mb-3 text-xl text-gray-700">Send us a message</h2>
                            <form className="w-full flex flex-col items-center gap-4 max-w-[500px]" onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    id="name" 
                                    placeholder="Enter your name" 
                                    className="text-sm text-gray-500 py-4 pl-2 border-1 outline-none shadow-sm hover:shadow-md rounded-lg w-5/6" 
                                    value={formData.name} 
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                                
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="Enter your email" 
                                    className="text-sm text-gray-500 py-4 pl-2 border-1 outline-none shadow-sm hover:shadow-md rounded-lg w-5/6" 
                                    value={formData.email} 
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                                
                                <input 
                                    type="tel" 
                                    id="mobile" 
                                    placeholder="Enter your mobile number" 
                                    className="text-sm text-gray-500 py-4 pl-2 border-1 outline-none shadow-sm hover:shadow-md rounded-lg w-5/6" 
                                    value={formData.mobile} 
                                    onChange={handleChange}
                                />
                                {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile}</span>}
                                
                                <div className="pl-10 w-5/6">
                                    <label htmlFor="biodata" className="text-gray-700 text-left">Upload your biodata (PDF only)</label>
                                    <input 
                                        type="file" 
                                        id="biodata" 
                                        accept="application/pdf" 
                                        className="text-sm text-gray-500 py-4 pl-2 border-1 outline-none shadow-sm hover:shadow-md rounded-lg w-full" 
                                        onChange={handleChange}
                                    />
                                    {errors.biodata && <span className="text-red-500 text-sm">{errors.biodata}</span>}
                                </div>
                                <button type="submit" className="bg-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-pink-600">Submit</button>
                            </form>
                            <ToastContainer position="bottom-center" />
                            {isSubmitted && <div className="text-green-500 mt-4">Form submitted successfully!</div>}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}