import mongoose from "mongoose";

const enrollSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: Number,
        required: true
    },
    emailid: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required:true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    jerseysize:{
        type: String,
        required:true,
    },
    countryofbirth:{
        type: String,
        required:true,
    },
    nationality:{
        type: String,
        required:true,
    },
    nationalitystatus:{
        type: String,
        required:true,
    },
    city:{
        type: String,
        required:true,
    },
    state:{
        type: String,
        required:true,
    },
    pincode:{
        type: Number,
        required:true,
    },
    fulladdress:{
        type: String,
        required:true,
    },
    parent:{
            parentname:{
                type: String,
                required:true,
            },
            pOcupation:{
                type: String,
                required:true,
            },
            phonenumber:{
                type: Number,
                required:true,
            },
            pEmailid:{
                type: String,
                required:true,
            },
    },
    footballexp:{
        explevel:{
            type: String,
            required:true,
        },
        preferredpos:{
            type: String,
            required:true,
        },
        stateornational:{
            type: String,
        },
        anyclubs:{
            type: String,
        },
        anyotheracademies:{
            type: String,
        },
        medicalconditions:{
            type: String,
        },
        anyotherinfo:{
            type: String,
        },
}
}, {timestamps: true})


const Enroll = mongoose.model('Enroll', enrollSchema)

export default Enroll