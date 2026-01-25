
import React from 'react';
import { Button } from "@/components/ui/button";
import { LogIn } from 'lucide-react';

const SignInButton = () => {
  const handleSignIn = () => {
    const cognitoUrl = 'https://us-east-1dddt5jfyz.auth.us-east-1.amazoncognito.com/login?client_id=65bcegedshtar3a60ibtn32uig&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fsteenbras.co.za%2Fcallback';
    window.location.href = cognitoUrl;
  };

  return (
    <Button 
      onClick={handleSignIn}
      className="bg-orange hover:bg-orange-light text-white"
    >
      <LogIn className="mr-2 h-4 w-4" />
      Sign In
    </Button>
  );
};

export default SignInButton;
