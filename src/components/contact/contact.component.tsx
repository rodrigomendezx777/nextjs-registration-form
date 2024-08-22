import React from 'react';
import { ContactContainer, Button } from './contact.style';

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <h2>Contato</h2>
      <p>Entre em contato para saber mais sobre nossos produtos.</p>
      <Button>Contato</Button>
    </ContactContainer>
  );
};

export default Contact;
