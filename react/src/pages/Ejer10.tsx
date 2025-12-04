import React, { useEffect, useState } from 'react';
import { getCurrentUser, login as authLogin, logout as authLogout } from '../utils/auth';
import type { User } from '../utils/auth';

const Ejer10: React.FC = () => {
	const [username, setUsername] = useState('');
	const [user, setUser] = useState<User | null>(() => getCurrentUser());

	useEffect(() => {
		setUser(getCurrentUser());
	}, []);

	const handleLogin = () => {
		const name = username.trim();
		if (!name) return;
		const u = authLogin(name);
		setUser(u);
		setUsername('');
	};

	const handleLogout = () => {
		authLogout();
		setUser(null);
	};

	return (
		<div style={{ padding: 16 }}>
			<h2>Ejercicio 10</h2>
			<p>Usuario actual: <strong>{user?.username ?? 'Ninguno'}</strong></p>

			<div style={{ marginTop: 12 }}>
				<input
					placeholder="Nombre de usuario"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					style={{ padding: 8, marginRight: 8 }}
				/>
				<button onClick={handleLogin} disabled={!username.trim()}>
					Login
				</button>
				<button onClick={handleLogout} disabled={!user} style={{ marginLeft: 8 }}>
					Logout
				</button>
			</div>

			<pre style={{ marginTop: 16, background: '#000000ff', padding: 8 }}>
				{JSON.stringify(user, null, 2)}
			</pre>
		</div>
	);
};

export default Ejer10;
