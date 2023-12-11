"use client";

import 'mathlive';
import { useState } from 'react';
import { MathfieldElement } from 'mathlive';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'math-field': React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>;
    }
  }
}

const containerStyle = {
  maxWidth: '800px',
  margin: 'auto',
};

const buttonStyle = {
  fontSize: '1.5rem',
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

// Define the Home component
export default function Home() {
  const [value, setValue] = useState(''); // Initialize value with an empty string

  // Function to handle input changes in MathField
  const handleMathFieldInput = (evt: React.ChangeEvent<HTMLElement>) => {
    setValue(evt.target.value);
  };

  // Function to handle button click (increment value)
  const incrementValue = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={containerStyle}>
        <math-field
          onInput={handleMathFieldInput}
          style={{ fontSize: '2rem', display: 'block', marginBottom: '20px' }}
        >
          {value}
        </math-field>

        <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
          Value: {value}
        </p>

        <button style={buttonStyle} onClick={incrementValue}>
          Increment Value
        </button>
      </div>
    </main>
  );
}

// Home.useClient = true;

// export default Home;