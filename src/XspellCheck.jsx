import React, { useState, useEffect } from 'react';

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  // Custom dictionary for spell checking
  const customDictionary = { 
    teh: "the", 
    wrok: "work", 
    fot: "for", 
    exampl: "example" 
  };

  // Function to check spelling and get suggestion for first misspelled word
  const checkSpelling = (inputText) => {
    if (!inputText.trim()) {
      setSuggestion('');
      return;
    }

    // Split text into words and check each word
    const words = inputText.toLowerCase().split(/\s+/);
    
    for (let word of words) {
      // Remove punctuation from word for checking
      const cleanWord = word.replace(/[^\w]/g, '');
      
      if (customDictionary[cleanWord]) {
        setSuggestion(customDictionary[cleanWord]);
        return;
      }
    }
    
    // No misspelled word found
    setSuggestion('');
  };

  // Handle text input change
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    checkSpelling(newText);
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '30px',
          marginTop: '0'
        }}>
          Spell Check and Auto-Correction
        </h1>
        
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text..."
          style={{
            width: '100%',
            height: '120px',
            padding: '10px',
            border: '2px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            resize: 'vertical',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
        
        {suggestion && (
          <p style={{
            marginTop: '15px',
            marginBottom: '0',
            fontSize: '16px',
            color: '#333'
          }}>
            Did you mean: <strong>{suggestion}</strong>?
          </p>
        )}
      </div>
    </div>
  );
};

export default XSpellCheck;