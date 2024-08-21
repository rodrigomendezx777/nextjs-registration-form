import React, { useState } from 'react';
import { Card, Layout, Title, Input, Button } from '@/components';  // Importando componentes que já existem

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return 'Email é obrigatório';
    if (!emailRegex.test(value)) return 'Email inválido';
    return null;
  };

  const validatePassword = (value: string): string | null => {
    if (!value) return 'Senha é obrigatória';
    if (value.length < 6) return 'Senha deve ter pelo menos 6 caracteres';
    return null;
  };

  const validateConfirmPassword = (value: string): string | null => {
    if (!value) return 'Confirmação de senha é obrigatória';
    if (value !== password) return 'As senhas não coincidem';
    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    console.log('Enviando dados:', { username, email, password, confirmPassword });

    try {
      // Substitua pela URL da sua API
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Sucesso
        alert('Registro realizado com sucesso!');
        // Limpar campos ou redirecionar
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors({});
      } else {
        // Exibir mensagens de erro
        alert(`Erro: ${result.message}`);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('seu registro não foi enviado. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Card>
        <Title>REGISTRO</Title>
        <Input
          label="Nome de usuário"
          value={username}
          onChange={setUsername}
          placeholder="Digite seu nome de usuário"
          successMessage={errors.username || 'Nome de usuário válido'}
        />
        <Input
          label="Email"
          value={email}
          onChange={setEmail}
          placeholder="Digite seu email"
          validate={validateEmail}
          successMessage={errors.email || 'Email válido'}
        />
        <Input
          label="Senha"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Digite sua senha"
          validate={validatePassword}
          successMessage={errors.password || 'Senha válida'}
        />
        <Input
          label="Confirme sua Senha"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="Confirme sua senha"
          validate={validateConfirmPassword}
          successMessage={errors.confirmPassword || 'Senhas conferem'}
        />
        <Button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Registrar'}
        </Button>
      </Card>
    </Layout>
  );
};

export default Register;
