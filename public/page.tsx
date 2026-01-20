export default function Home() {
  // Просто редирект на статичный HTML
  if (typeof window !== 'undefined') {
    window.location.href = '/index.html';
  }
  
  return (
    <div style={{ padding: 50, textAlign: 'center' }}>
      <h1>Eldritch Hunter</h1>
      <p>Redirecting to game...</p>
      <a href="/index.html">Click here if not redirected</a>
    </div>
  );
}
