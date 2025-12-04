export type User = { username: string };

const STORAGE_KEY = 'currentUser';

export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? (JSON.parse(raw) as User) : null;
}

export function login(username: string): User {
  const user: User = { username };
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }
  return user;
}

export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
}
