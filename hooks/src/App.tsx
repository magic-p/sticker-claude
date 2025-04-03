import React from 'react';
import { useIsMobile } from './use-mobile';
import { useToast } from './use-toast';
import { Toaster } from './components/ui/toaster';

function App() {
  const isMobile = useIsMobile();
  const { toast } = useToast();

  React.useEffect(() => {
    toast({
      title: "Device Detection",
      description: `You are currently on a ${isMobile ? 'mobile' : 'desktop'} device`,
    });
  }, [isMobile]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hooks Test</h1>
      <p>Current device type: {isMobile ? 'Mobile' : 'Desktop'}</p>
      <button 
        onClick={() => {
          toast({
            title: "Test Toast",
            description: "This is a test toast message",
          });
        }}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Show Test Toast
      </button>
      <Toaster />
    </div>
  );
}

export default App; 