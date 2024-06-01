import Link from "next/link"

const PrivacyPolicy = () => {
  return (
    <p className="px-8 text-center text-sm text-muted-foreground dark:text-gray-400">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary dark:hover:text-primary-light"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary dark:hover:text-primary-light"
        >
          Privacy Policy
        </Link>
        .
      </p>
  )
}

export default PrivacyPolicy