// Project components and styles
import "./globals.css";
import "react-toastify/ReactToastify.min.css";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
