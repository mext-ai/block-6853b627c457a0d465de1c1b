import React, { useEffect, useState } from 'react';

interface BlockProps {
}

const Block: React.FC<BlockProps> = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '40px',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        padding: '30px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          marginBottom: '30px',
          borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
          paddingBottom: '20px'
        }}>
          Lorem Ipsum Generator ✨
        </h1>

        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '15px',
            color: '#FFE4B5'
          }}>
            What is Lorem Ipsum?
          </h2>
          <p style={{ 
            lineHeight: '1.6', 
            fontSize: '1.1rem',
            marginBottom: '20px'
          }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '15px',
            color: '#FFE4B5'
          }}>
            Sample Paragraph
          </h2>
          <p style={{ 
            lineHeight: '1.6', 
            fontSize: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: '10px',
            borderLeft: '4px solid #FFE4B5'
          }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '15px',
            color: '#FFE4B5'
          }}>
            Random Facts
          </h2>
          <ul style={{ 
            fontSize: '1rem',
            lineHeight: '1.6',
            paddingLeft: '20px'
          }}>
            <li style={{ marginBottom: '10px' }}>The quick brown fox jumps over the lazy dog</li>
            <li style={{ marginBottom: '10px' }}>Pack my box with five dozen liquor jugs</li>
            <li style={{ marginBottom: '10px' }}>How vexingly quick daft zebras jump!</li>
            <li style={{ marginBottom: '10px' }}>Bright vixens jump; dozy fowl quack</li>
          </ul>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '15px',
            color: '#FFE4B5'
          }}>
            More Lorem Text
          </h2>
          <p style={{ 
            lineHeight: '1.6', 
            fontSize: '1rem',
            marginBottom: '15px'
          }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
          </p>
          <p style={{ 
            lineHeight: '1.6', 
            fontSize: '1rem'
          }}>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          </p>
        </div>

        <div style={{ 
          textAlign: 'center',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          fontSize: '0.9rem',
          fontStyle: 'italic'
        }}>
          "This is just fake text content for demonstration purposes! 🎭"
        </div>
      </div>
    </div>
  );
};

export default Block;