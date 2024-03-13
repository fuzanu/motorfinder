import "./globals.css";
import { Footer } from "@/components";

export const metadata = {
  title: "MotorFinder",
  description: "Discover the best cars!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}
