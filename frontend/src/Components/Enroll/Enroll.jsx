import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast'

function Enroll() {

  const [formData, setFormData] = useState({
    fullname: "",
    mobilenumber: "",
    emailid: "",
    dob: "",
    height: "",
    weight: "",
    gender: "",
    jerseysize: "",
    countryofbirth: "",
    nationality: "",
    nationalitystatus: "",
    city: "",
    state: "",
    pincode: "",
    fulladdress: "",
    parent: {
      parentname: "",
      pOcupation: "",
      phonenumber: "",
      pEmailid: "",
    },
    footballexp: {
      explevel: "",
      preferredpos: "",
      stateornational: "",
      anyclubs: "",
      anyotheracademies: "",
      medicalconditions: "",
      anyotherinfo: "",
    },
  });

  // const [statusMessage, setStatusMessage] = useState('');

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevData) => {
      const keys = name.split('.'); // Split the nested keys (e.g., "parent.parentname")
      const updatedData = { ...prevData };
  
      // Traverse the object structure dynamically
      let nestedObject = updatedData;
      for (let i = 0; i < keys.length - 1; i++) {
        nestedObject[keys[i]] = { ...nestedObject[keys[i]] }; // Ensure immutability
        nestedObject = nestedObject[keys[i]];
      }
  
      // Update the final nested key with the new value
      nestedObject[keys[keys.length - 1]] = value;
  
      return updatedData;
    });
  };
  
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/enroll', formData).then(() => {
        toast.success('enrolled successfully');
      }).catch(() => {
        toast.error('error while enrolling');
      })
      console.log('response', response)
      console.log(formData)

    } catch (error) {
      console.error('Error sending form data:', error);
      toast.error('error while sending enrolling data');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-4 mb-4">
      <h2 className="text-2xl font-bold mb-6">Academy Trials Enrollment Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Student Information */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Player Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullname"
                id='fullname'
                // value={formData.fullname}
                placeholder="Full Name"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mobile Number
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="mobilenumber"
                id='mobilenumber'
                // value={formData.mobilenumber}
                placeholder="mobilenumber"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email ID
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="emailid"
                id="emailid"
                // value={formData.emailid}
                placeholder="email"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth
                <span className="text-red-500">*</span>
              </label>
              <input
                type="string"
                name="dob"
                id="dob"
                // value={formData.dob}
                placeholder="date of birth"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Height (cm)
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="height"
                id="height"
                // value={formData.height}
                placeholder="height"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Weight (kg)
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="weight"
                id="weight"
                // value={formData.weight}
                placeholder="weight"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Gender
                <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                name="gender"                       //type not specified
                id="gender"
                // value={formData.gender}
                placeholder="gender"
                required>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Jersey Size
                <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                name="jerseysize"                       //type not specified
                id="jerseysize"
                // value={formData.jerseysize}
                placeholder="jerseysize"
                required>
                <option value="">Select</option>
                <option value="S">Small [S]</option>
                <option value="M">Medium [M]</option>
                <option value="L">Large [L]</option>
                <option value="XL">Extra Large [XL]</option>
                <option value="XL">XX Large [XXL]</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country of Birth
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                name="countryofbirth"                       //type not specified
                id="countryofbirth"
                // value={formData.countryofbirth}
                placeholder="country of birth"
                required
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium mb-1">
                Nationality
                <span className="text-red-500">*</span>
              </label>

              {/* Container for the dropdown */}
              <div className="relative">
                <select
                  className=" border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  name="nationality"                       //type not specified
                  id="nationality"
                  // value={formData.nationality}
                  placeholder="nationality of birth"
                  required
                  style={{
                    maxHeight: '200px',        // Set the max height for the dropdown
                    overflowY: 'auto',         // Enable vertical scroll
                    height: '40px',            // Set fixed height for the select box
                  }}
                >
                  <option value="">
                    Select your nationality
                  </option>
                  {[
                    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia",
                    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
                    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
                    "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
                    "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China",
                    "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
                    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt",
                    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
                    "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
                    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
                    "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
                    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kosovo",
                    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
                    "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
                    "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
                    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
                    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia",
                    "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
                    "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
                    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
                    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
                    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
                    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
                    "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
                    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
                    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
                    "Yemen", "Zambia", "Zimbabwe"
                  ].map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Status
                <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                name="nationalitystatus"                       //type not specified
                id="nationalitystatus"
                // value={formData.nationalitystatus}
                placeholder="nationality status"
                required>
                <option value="">Select</option>
                <option value="indian">Indian</option>
                <option value="nri">Non Resident Indian</option>
                <option value="foreigner">Foreigner</option>
              </select>
            </div>
          </div>
        </section>

        {/* Address Information */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Address Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                name="city"                       //type not specified
                id="city"
                // value={formData.city}
                placeholder="city"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                name="state"                       //type not specified
                id="state"
                // value={formData.state}
                placeholder="state"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pincode
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                name="pincode"                       //type not specified
                id="pincode"
                // value={formData.pincode}
                placeholder="pincode"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Full Address
              <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              rows="3"
              onChange={handleChange}
              name="fulladdress"                       //type not specified
              id="fulladdress"
              // value={formData.fulladdress}
              placeholder="fulladdress"
              required
            ></textarea>
          </div>
        </section>

        {/* Parent/Guardian Information */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Parent/Guardian Information <span className="text-red-500">*</span>
          </h3>
          <div className="mb-4 border-b border-gray-200 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Parent/Guardian Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  name='parent.parentname'                      //type not specified
                  id='parent.parentname'
                  value={formData.parent.parentname}
                  placeholder="parent name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Occupation
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  name="parent.pOcupation"                       //type not specified
                  id='parent.pOcupation'
                  value={formData.parent.pOcupation}
                  placeholder="parent Ocupation"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  name="parent.phonenumber"                       //type not specified
                  id='parent.phonenumber'
                  value={formData.parent.phonenumber}
                  placeholder="phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  name="parent.pEmailid"                       //type not specified
                  id="parent.pEmailid"
                  value={formData.parent.pEmailid}
                  placeholder="Parent Emailid"
                  required
                />
              </div>
            </div>
          </div>
        </section>



        {/* Football Experience */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Football Experience <span className="text-red-500">*</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Experience Level
                <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                name="footballexp.explevel"                       //type not specified
                id="footballexp.explevel"
                value={formData.footballexp.explevel}
                placeholder="experience level"
                required>
                <option value="">Select</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="professional">Professional</option>
                <option value="recreational">Recreational</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Preferred Position
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="e.g., Forward, Midfielder"
                onChange={handleChange}
                name="footballexp.preferredpos"                       //type not specified
                id="footballexp.preferredpos"
                value={formData.footballexp.preferredpos}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Have you played for any college/school at state or national level?
              </label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="If yes, specify"
                rows="2"
                onChange={handleChange}
                name="footballexp.stateornational"                       //type not specified
                id="footballexp.stateornational"
                value={formData.footballexp.stateornational}
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mt-1 mb-5">
                Have you played for any football club/s previously?
              </label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="If yes, specify"
                rows="2"
                onChange={handleChange}
                name="footballexp.anyclubs"                       //type not specified
                id="footballexp.anyclubs"
                value={formData.footballexp.anyclubs}
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Have you attended football academies previously?
              </label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="If yes, specify"
                rows="2"
                onChange={handleChange}
                name="footballexp.anyotheracademies"                       //type not specified
                id='footballexp.anyotheracademies'
                value={formData.footballexp.anyotheracademies}
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Do you have any pre-existing medical condition/s or injuries?
              </label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="If yes, specify"
                rows="2"
                onChange={handleChange}
                name="footballexp.medicalconditions"                       //type not specified
                id="footballexp.medicalconditions"
                value={formData.footballexp.medicalconditions}
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Any other information?</label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Optional"
                rows="3"
                onChange={handleChange}
                name="footballexp.anyotherinfo"                       //type not specified
                id="footballexp.anyotherinfo"
                value={formData.footballexp.anyotherinfo}
              ></textarea>
            </div>
          </div>

        </section>

        {/* Submit Button */}
        <div className="text-center">

          <button
            style={{
              backgroundColor: "#383085",
              color: "white",
            }}
            type="submit"
            className="text-white py-2 px-6 rounded-lg hover:opacity-90"
          >
            Submit Registration
          </button>
        </div>
      </form >
    </div>
  );
}

export default Enroll;
