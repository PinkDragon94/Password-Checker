import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  // Function to evaluate password strength
  const evaluatePasswordStrength = (password) => {
    if (password.length < 6) {
      return 'Weak';
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length >= 8 && hasLetters && hasNumbers && hasSpecialChar) {
      return 'Strong';
    } else if (password.length >= 6 && hasLetters && hasNumbers) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const passwordStrength = evaluatePasswordStrength(newPassword);
    setStrength(passwordStrength);
  };

  // Define the strength message color
  const getStrengthColor = () => {
    switch (strength) {
      case 'Weak':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Strong':
        return 'green';
      default:
        return '';
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <p style={{ color: getStrengthColor() }}>
        {strength && `Password strength: ${strength}`}
      </p>
    </div>
  );
};

export default PasswordStrengthChecker;
