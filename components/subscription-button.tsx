'use client';

import toast from 'react-hot-toast';
import axios from 'axios';
import { Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({
  isPro = false,
}: SubscriptionButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get('/api/stripe');
      window.location.href = response.data.url;
    } catch (error) {
      toast.error('Oops ! Quelque chose a mal tourné...' + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      disabled={isLoading}
      variant={isPro ? 'default' : 'premium'}
      onClick={onClick}
    >
      {isPro ? "Gérer l'abonnement" : "S'abonner"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};
