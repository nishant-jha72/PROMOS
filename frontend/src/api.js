// src/api.js
const API = process.env.REACT_APP_API || 'http://localhost:5000/api';

export async function apiFetch(path, { method = 'GET', body, token } = {}) {
  const headers = { 'Accept': 'application/json' };
  if (body && !(body instanceof FormData)) headers['Content-Type'] = 'application/json';
  if (token) headers['Authorization'] = 'Bearer ' + token;

  const res = await fetch(`${API}${path}`, {
    method,
    headers,
    body: body && !(body instanceof FormData) ? JSON.stringify(body) : body,
  });

  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : null; } catch (err) { data = text; }

  if (!res.ok) {
    const err = new Error(data?.msg || res.statusText || 'API error');
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}
