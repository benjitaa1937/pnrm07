import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <h2 style={styles.title}>Login</h2>
      <form style={styles.form}>
        <input type="email" placeholder="Email" style={styles.input} required />
        <input type="password" placeholder="Password" style={styles.input} required />
        <button type="submit" style={styles.button}>Login</button>
      </form>

      <button style={styles.button}>Send Magic Link</button>

      <div style={styles.oauthContainer}>
        <button style={{ ...styles.button, backgroundColor: '#db4437' }}>Login with Google</button>
        <button style={{ ...styles.button, backgroundColor: '#24292e' }}>Login with GitHub</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  title: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '1rem',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  oauthContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '1rem',
  },
};

export default Login;
