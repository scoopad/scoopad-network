import "./globals.css";

export const metadata = {
  title: "Scoopad — Fair Onchain Launches",
  description:
    "Launch fair tokens through grid games, staking and burning."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
