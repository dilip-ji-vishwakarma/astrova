import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/login/loginSlice';

function Login() {
  const dispatch = useDispatch();
  const { status, error } = useSelector(s => s.auth);

  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email}    onChange={e => setEmail(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <button disabled={status === 'loading'}>Sign in</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
