import React, {useRef, useState} from 'react'
import emailjs  from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  const QuoteCard = () => {
    const form = useRef();
     const [firstName, setFirstName] = useState("");
     const[lastname, setLastName] = useState("");
     const[phoneNumber, setPhoneNumber] = useState("");
     const[eventTitle, setEventTitle]= useState ("");
     const[detailedMessage, setDetailedMessage] = useState("");
     
      
      const sendEmail = (e) => {
        e.preventDefault(); 
      
        emailjs.sendForm('service_ozqa23p', 'template_d5sw8yb', form.current, 'IxdFS9V5tid44jVIx')
          .then((result) => {
          }, (error) => {
          });

          setFirstName ('')
           setLastName ('')
           setPhoneNumber('')
           setEventTitle('')
           setDetailedMessage('')

  };

  const showToastMessage = () => {
    toast.success('Thank You! Your Message has been recorded.', {
        position: toast.POSITION.TOP_RIGHT,
        
    });
};


  return (
    <div className='bg-gold '>

    <div className='text-center mb-5'> 
    <h1 className='text-black text-[25px] mb-5 font-bold pt-5'> Would you like to access our services? </h1>
    <h1 className='text-white text-[20px] mb-5'> Request for a quote by filling in this form </h1>
    </div>


    <form ref={form} onSubmit={sendEmail}> 
    <div className=' md:columns-1 lg:columns-2 mx-4'>
    <div>
    <input type="text" name="first_name" id="first_name" className="block bg-gold placeholder-black py-2.5 px-0 w-full mb-5 text-sm  border-0 border-b-2 appearance-non text-black border-black  " placeholder=" First Name * " required value={firstName} onChange={event => setFirstName(event.target.value)}/>
    </div>
    <div>
    <input type="text" name="last_name" id="last_name" className="block bg-gold placeholder-black py-2.5 px-0 w-full mb-5 text-sm  border-0 border-b-2 appearance-non text-black border-black" placeholder=" Last Name * " required value={lastname}   onChange={event => setLastName(event.target.value)} />
    </div>
    </div>

    <div className=' md:columns-1 lg:columns-2 mx-4 mt-5'>
    <div>
    <input type="number" name="phone_number" id="phone_number" className="block bg-gold  placeholder-black py-2.5 px-0 w-full mb-5 text-sm  border-0 border-b-2 appearance-non text-black border-black  " placeholder=" Phone number * " required value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
    </div>
    <div>
    
    <input type="text" name="event_title" id="event_title" className="block bg-gold mt-5 placeholder-black py-2.5 px-0 w-full mb-5 text-sm  border-0 border-b-2 appearance-non text-black border-black" placeholder=" Event title " value={eventTitle} onChange={event => setEventTitle(event.target.value)} />
    </div>
    </div>
    <div className='mt-5 items-center mx-4 pb-5'> 
    <input type="text" name="detailed_message" id="detailed_message" className="block bg-gold mt-5 placeholder-black py-2.5 px-0 w-full mb-5 text-sm  border-0 border-b-2 appearance-non text-black border-black" placeholder=" Detailed Message * " required value={detailedMessage} onChange={event => setDetailedMessage(event.target.value)}/>

    </div>

    <div className='text-center pb-5'>
      <button className='  px-6 py-2 text-[15px] text-gold bg-black rounded-md hover:text-white' onClick={showToastMessage} > Submit </button>
      <ToastContainer/>
    
    </div>
    </form>



    </div>


  )
}

export default QuoteCard