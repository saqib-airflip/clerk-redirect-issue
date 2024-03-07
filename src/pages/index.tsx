import { OrganizationProfile, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <header>
        <UserButton afterSignOutUrl="/" />
      </header>
      <OrganizationProfile />
      <div>Your page&apos;s content can go here.</div>
    </>
  )
}

