"use server"

import { Resend } from 'resend';
import { bookingFormInputs } from "@/types/types"
import { EmailTemplate } from '@/components/emailtemplates/BookingFormTemplate';
import { ReactElement } from 'react'


export const submitBookingForm=async(formData:bookingFormInputs)=>{
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail= process.env.FROM_EMAIL as string;
    const toEmail= process.env.TO_EMAIL as string;


    console.log(formData)
    const { data, error } = await resend.emails.send({
        from:fromEmail,
        to: [toEmail],
        subject: 'Hello world',
        react:EmailTemplate({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            city: formData.city,
            recordingDate: formData.recordingDate,
        }) as ReactElement,
      });
    
      let returnObj={
        success:true,
        message:"Form Submitted Sucessfully"
      }

      if (error) {
        console.log(error)
        returnObj.success=false;
        returnObj.message=error.message;
      }
    
      return returnObj;
}