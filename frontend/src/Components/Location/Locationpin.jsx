import React from "react";
import { PinContainer } from "../ui/3d-pin";

export function Locationpin() {
    return (
        <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer title="Click to find us" href="https://maps.app.goo.gl/V8Kpa2ufAf95mSCw6">
                <div 
                    className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        Find Us Here
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-yellow-300">
                       
                            Actually We Are Everywhere
                        </span>
                    </div>
                    {/* Replace the gradient with the embedded Google Maps */}
                    <iframe className="mt-4 w-full h-full rounded-lg"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.6787193781747!2d74.5350423!3d15.873474500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf67842215a72d%3A0x3f3b95e8bf112ccb!2sBelagavi%20united%20football%20academy!5e0!3m2!1sen!2sin!4v1737271461150!5m2!1sen!2sin" 
                     allowFullScreen=""
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </PinContainer>
        </div>
    );
}


// import React from "react";
// import { PinContainer } from "../ui/3d-pin";

// export function Locationpin() {
//   return (
//     <div className="h-[40rem] w-full flex items-center justify-center ">
//       <PinContainer title="Click to go to find us" href="https://maps.app.goo.gl/NbLc8F7GqiF9hQN38">
//         <div
//           className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
//           <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
//             Find Us Here
//           </h3>
//           <div className="text-base !m-0 !p-0 font-normal">
//             <span className="text-slate-500">
//               Actually We Are Everywhere
//             </span>
//           </div>
//           <div
//             className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br  from-purple-500 to-yellow-300" />

//         </div>
//       </PinContainer>
//     </div>
//   );
// }
