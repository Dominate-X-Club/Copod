const EmailVerification = () => {
  return (
    <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-6 dark:bg-gray-900">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold dark:text-white">
          Verify Your Email Address
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          We've sent a verification email to your inbox. Please check your email
          and click the link to complete the verification process.
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
