import React, { useState } from 'react';
import {
  HeaderContainer,
  TextContainer,
  FormContainer,
  Title,
  Subtitle,
  Form,
  Input,
  Button,
  ErrorMessage,
} from './header.style';

const Header: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    celular: '',
    cep: '',
  });

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    celular: '',
    cep: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { nome: '', email: '', celular: '', cep: '' };

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
      valid = false;
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Email inválido';
      valid = false;
    }

    if (!/^\d{10,11}$/.test(formData.celular)) {
      newErrors.celular = 'Celular deve ter 10 ou 11 dígitos';
      valid = false;
    }

    if (!/^\d{5}-?\d{3}$/.test(formData.cep)) {
      newErrors.cep = 'CEP inválido';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Submeter formulário
      console.log('Formulário enviado:', formData);
      // Aqui você pode adicionar a lógica para enviar os dados do formulário
    }
  };

  return (
    <HeaderContainer>
      <TextContainer>
        <Title>RW PISCINAS</Title>
        <Subtitle>Transformando seu sonho em realidade com as melhores piscinas de fibra</Subtitle>
      </TextContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            isInvalid={!!errors.nome}
          />
          {errors.nome && <ErrorMessage>{errors.nome}</ErrorMessage>}
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <Input
            type="tel"
            name="celular"
            placeholder="Celular"
            value={formData.celular}
            onChange={handleChange}
            isInvalid={!!errors.celular}
          />
          {errors.celular && <ErrorMessage>{errors.celular}</ErrorMessage>}
          <Input
            type="text"
            name="cep"
            placeholder="CEP"
            value={formData.cep}
            onChange={handleChange}
            isInvalid={!!errors.cep}
          />
          {errors.cep && <ErrorMessage>{errors.cep}</ErrorMessage>}
          <Button type="submit">Enviar</Button>
        </Form>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
