import React, { useEffect } from 'react';

const TypeformEmbed = ({ formId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    script.onload = () => {
      window.typeformEmbed.makeWidget('01HRDA71K1V6TF1GKKG219EWRX', document.querySelector('[data-tf-live="01HRDA71K1V6TF1GKKG219EWRX"]'));
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [formId]);

  return <div data-tf-live={formId}></div>;
};

export default TypeformEmbed;
