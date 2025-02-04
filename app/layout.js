import "./globals.css"
import { ThemeProvider } from "./components/ThemeProvider"

export const metadata = {
  title: "Toner Information App",
  description: "Select a toner type to see its SAP code and remarks",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

