import * as React from 'react';

interface EmailTemplateProps {
    name: string;
  phone: number;
  email: string;
  city: string;
  recordingDate: Date;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
  phone,
  email,
  city,
  recordingDate,
}) => (
  <div>
        <h1>name : {name}</h1>
    <h1>phone : {phone}</h1>
    <h1>email : {email}</h1>
    <h1>city : {city}</h1>
    <h1>recordingDate : {recordingDate.toLocaleDateString()}</h1>
  </div>
);
