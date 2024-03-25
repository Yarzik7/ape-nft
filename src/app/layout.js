import './globals.css';
import 'modern-normalize/modern-normalize.css';

export const metadata = {
  title: 'Ape NFT',
  description: 'Yacht Ape is a collection of unique digital apes that you can own in NFT format',
  icons: { icon: '/images/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
