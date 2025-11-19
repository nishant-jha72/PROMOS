import React from 'react';
import { Box, Typography, Button, TextField, Paper, Stack, List, ListItem, ListItemText, Divider } from '@mui/material';

const API = process.env.REACT_APP_API || 'http://localhost:5000/api';

export default function Dashboard({ token, user, setToken, setUser }) {
  const [promos, setPromos] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => { fetchPromos(); }, []);

  const fetchPromos = async () => {
    try {
      const res = await fetch(`${API}/promos`, { headers: { Authorization: 'Bearer ' + token }});
      if (!res.ok) return console.error('fetch failed');
      const data = await res.json();
      setPromos(data);
    } catch (err) { console.error(err); }
  };

  const createPromo = async () => {
    try {
      const res = await fetch(`${API}/promos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
        body: JSON.stringify({ title, description })
      });
      if (res.ok) { setTitle(''); setDescription(''); fetchPromos(); }
      else { const d = await res.json(); alert(d.msg || 'Failed'); }
    } catch (err) { console.error(err); }
  };

  const expressInterest = async (id) => {
    try {
      const res = await fetch(`${API}/promos/${id}/interest`, { method: 'POST', headers: { Authorization: 'Bearer ' + token }});
      if (res.ok) fetchPromos(); else { const d = await res.json(); alert(d.msg || 'Failed'); }
    } catch (err) { console.error(err); }
  };

  const logout = () => { setToken(null); setUser(null); };

  return (
    <Box>
      <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="subtitle1">Logged in as <strong>{user?.name}</strong> ({user?.role})</Typography>
          </div>
          <div>
            <Button variant="outlined" color="inherit" onClick={logout}>Logout</Button>
          </div>
        </Stack>
      </Paper>

      {user?.role === 'promoter' && (
        <Paper elevation={1} sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6">Create Promo</Typography>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <TextField label="Title" value={title} onChange={e => setTitle(e.target.value)} fullWidth />
            <TextField label="Description" value={description} onChange={e => setDescription(e.target.value)} multiline rows={3} fullWidth />
            <Button variant="contained" onClick={createPromo}>Create</Button>
          </Stack>
        </Paper>
      )}

      <Typography variant="h6" sx={{ mb: 1 }}>All Promos</Typography>
      <Paper elevation={0}>
        <List>
          {promos.map(p => (
            <React.Fragment key={p._id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={<strong>{p.title}</strong>}
                  secondary={<span>{p.description}<br/><small>By: {p.promoter?.name}</small></span>}
                />
                <Stack spacing={1} sx={{ ml: 2 }}>
                  <div>Interested: {p.interestedClients?.length || 0}</div>
                  {user?.role === 'client' && <Button variant="contained" size="small" onClick={() => expressInterest(p._id)}>I'm interested</Button>}
                </Stack>
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
