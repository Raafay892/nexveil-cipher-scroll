import { useState, useEffect } from 'react';

interface IPData {
  ip: string;
  loading: boolean;
  error: string | null;
}

export const useUserIP = (): IPData => {
  const [ip, setIP] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try ipapi.co first
        const response = await fetch('https://ipapi.co/ip/', {
          method: 'GET',
        });
        
        if (response.ok) {
          const ipAddress = await response.text();
          setIP(ipAddress.trim());
        } else {
          throw new Error('Failed to fetch IP');
        }
      } catch (err) {
        // Fallback to ipify.org
        try {
          const fallbackResponse = await fetch('https://api.ipify.org?format=text');
          if (fallbackResponse.ok) {
            const ipAddress = await fallbackResponse.text();
            setIP(ipAddress.trim());
          } else {
            throw new Error('Fallback IP service failed');
          }
        } catch (fallbackErr) {
          setError('Unable to detect IP address');
          setIP('UNKNOWN');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchIP();
  }, []);

  return { ip, loading, error };
};