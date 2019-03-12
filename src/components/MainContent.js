import * as React from 'react';

function MainContent({ title, children }) {
  return (
    <main className="main">
      <h1>{ title }</h1>
      { children }
    </main>
  );
}

export { MainContent as default };