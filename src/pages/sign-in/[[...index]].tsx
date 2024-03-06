import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="flex justify-center py-24">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        afterSignInUrl="/"
      />
    </div>
  );
};

export default SignInPage;
