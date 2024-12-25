import React,{useState} from 'react'
import './ContactUs.css'
function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
      });
   const handleSubmit=(e)=>{
   
        e.preventDefault();   
        alert("Thank you for contacting us!");
        setFormData({ name: "", phone: "", email: "" });
      
    };
    const handleChange=(e)=>{
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
  return (
    <div className="contact-form-container">
  <h1 >Contact Us</h1>
  <div><p style={{fontFamily:'cursive'}}>For any inqueries please contact us through our form.</p></div>
  <form onSubmit={handleSubmit}>
    <div className="form-field">
      <label for="name">Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange}/>
    </div>
    <div class="form-field">
      <label for="phone">Phone No</label>
      <input type="number" name="phone" value={formData.phone} onChange={handleChange}/>
    </div>
    <div class="form-field">
      <label for="email">Email</label>
      <input type="text" name="email" value={formData.email} onChange={handleChange}/>
    </div>
    <button className='submit-bt'>Submit</button>
  </form>
</div>

  )
}

export default ContactUs