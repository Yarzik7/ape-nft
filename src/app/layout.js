import "./globals.css";

export const metadata = {
  title: "APE NFT",
  description: "APE NFT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
