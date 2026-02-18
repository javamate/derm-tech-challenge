import { useState } from "react";

interface LoginProps {
  onLogin: (name: string) => void;
}

function Login({ onLogin }: LoginProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(name.trim());
    }
  };

  return (
    <div className="card">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={{
          borderRadius: '8px',
          border: '1px solid transparent',
          padding: '0.6em 1.2em',
          fontSize: '1em',
          fontFamily: 'inherit',
          backgroundColor: '#1a1a1a',
          color: 'rgba(255, 255, 255, 0.87)',
          marginBottom: '1em',
          display: 'block',
          width: '200px',
          margin: '0 auto 1em auto'
        }}
      />
      <button type="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;