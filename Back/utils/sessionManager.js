//Importamos el modulo crypto
const crypto = require('crypto');

// Diccionario en memoria: { token: { username, createdAt } }
const sessions = {};

/**
 * Crea una nueva sesión y devuelve el token.
 * @param {string} username
 * @returns {string} token de sesión
 */
const createSession = (username) => {
  const token = crypto.randomUUID();
  sessions[token] = { username, createdAt: new Date().toISOString() };
  return token;
}

/**
 * Obtiene la sesión asociada al token.
 * @param {string} token
 * @returns {{ username: string, createdAt: string } | null}
 */
const getSession = (token) => {
  return sessions[token] || null;
}

/**
 * Elimina la sesión asociada al token.
 * @param {string} token
 */
const destroySession = (token) => {
  delete sessions[token];
}

/**
 * (Opcional) Devuelve todas las sesiones activas — útil para depurar.
 */
const getAllSessions = () => {
  return sessions;
}



module.exports = { createSession, getSession, destroySession, getAllSessions };