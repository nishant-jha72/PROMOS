import React from 'react';
import { Box, TextField, Button, Stack, Select, MenuItem, InputLabel, FormControl, Paper, Typography } from '@mui/material';

const API = process.env.REACT_APP_API || 'http://localhost:5000/api';

export default function Auth({ setToken, setUser }) {
  const [mode, setMode] = React.useState('login'); // login or register
  const [form, setForm] = React.useState({ name: '', email: '', password: '', role: 'client' });

  const submit = async (e) => {
    e && e.preventDefault();
    try {
      const url = mode === 'login' ? `${API}/auth/login` : `${API}/auth/register`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) return alert(data.msg || 'Error');
      setToken(data.token);
      setUser(data.user);
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 520, mx: 'auto', mt: 6 }}>
      <Stack spacing={2}>
        <Typography variant="h6">{mode === 'login' ? 'Login' : 'Register'}</Typography>

        {mode === 'register' && (
          <TextField label="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} fullWidth />
        )}

        <TextField label="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} fullWidth />
        <TextField label="Password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} fullWidth />

        {mode === 'register' && (
          <FormControl fullWidth>
            <InputLabel id="role-label">Role</InputLabel>
            <Select labelId="role-label" value={form.role} label="Role" onChange={e => setForm({ ...form, role: e.target.value })}>
              <MenuItem value="client">Client</MenuItem>
              <MenuItem value="promoter">Promoter</MenuItem>
            </Select>
          </FormControl>
        )}

        <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ mt: 1 }}>
          <Button variant="contained" onClick={submit}>{mode === 'login' ? 'Login' : 'Register'}</Button>
          <Button variant="text" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
            {mode === 'login' ? 'Create account' : 'Already have an account?'}
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
