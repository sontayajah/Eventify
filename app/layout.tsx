// Project components and styles
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
