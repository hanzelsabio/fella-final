import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3861.6998334374725!2d121.05995505750283!3d14.559150060393158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sph!4v1764430519871!5m2!1sen!2sph"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
