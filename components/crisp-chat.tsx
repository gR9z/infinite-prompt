'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('151711c1-f87a-4199-b4ae-1f6cbd073429');
  }, []);

  return null;
};
