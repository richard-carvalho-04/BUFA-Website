import Contact from "../model/contact.model.js";
import { errorHandler } from "../utils/error.js";
export const contact=async(req,res,next) =>{

const {fullname,email,telephoneno,message}=req.body
if (!fullname || !email || !telephoneno || !message|| fullname === '' || email === '' || telephoneno === '' ||message === '' ) {
        next(errorHandler(400, "All fields are required!"))
   }
console.log(fullname,email,telephoneno,message);


const newContact=new Contact({fullname,email,telephoneno,message})
console.log(newContact);
try {
    await newContact.save()
    console.log(newContact);
    res.json("contact successfull!")
} catch (error) {
    next(error)
}
}