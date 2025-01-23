import Enroll from "../model/enroll.model.js"; // Adjust the path if necessary
import { errorHandler } from "../utils/error.js";


// Controller to create a new enrollment
export const enroll = async (req, res, next) => {
    
        // Destructure the request body
        const {
            fullname,
            mobilenumber,
            emailid,
            dob,
            height,
            weight,
            gender,
            jerseysize,
            countryofbirth,
            nationality,
            nationalitystatus,
            city,
            state,
            pincode,
            fulladdress,
            parent,
            footballexp,
        } = req.body;

        // Validate required fields
        if (
            !fullname ||
            !mobilenumber ||
            !emailid ||
            !dob ||
            !height ||
            !weight ||
            !gender ||
            !jerseysize ||
            !countryofbirth ||
            !nationality ||
            !nationalitystatus ||
            !city ||
            !state ||
            !pincode ||
            !fulladdress ||
            !parent?.parentname ||
            !parent?.pOcupation ||
            !parent?.phonenumber ||
            !parent?.pEmailid ||
            !footballexp?.explevel ||
            !footballexp?.preferredpos
        ) next(errorHandler(400, "All fields are required!"));

        // Create a new enrollment instance
        const newEnrollment = new Enroll({
            fullname,
            mobilenumber,
            emailid,
            dob,
            height,
            weight,
            gender,
            jerseysize,
            countryofbirth,
            nationality,
            nationalitystatus,
            city,
            state,
            pincode,
            fulladdress,
            parent: {
                parentname: parent.parentname,
                pOcupation: parent.pOcupation,
                phonenumber: parent.phonenumber,
                pEmailid: parent.pEmailid,
            },
            footballexp: {
                explevel: footballexp.explevel,
                preferredpos: footballexp.preferredpos,
                stateornational: footballexp.stateornational || "",
                anyclubs: footballexp.anyclubs || "",
                anyotheracademies: footballexp.anyotheracademies || "",
                medicalconditions: footballexp.medicalconditions || "",
                anyotherinfo: footballexp.anyotherinfo || "",
            },
        });

        // Save to database
        // const savedEnrollment = await newEnrollment.save();
        try {
            await newEnrollment.save()
            console.log(newEnrollment);
            res.json("enrollment successfull!")
        } catch (error) {
            next(error)
        }
};
