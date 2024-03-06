import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="flex justify-center py-24">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        afterSignInUrl="/"
        afterSignUpUrl="/"
      />
    </div>
  );
};

export default SignUpPage;
