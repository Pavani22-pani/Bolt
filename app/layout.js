import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      
      >
        <Provider> 
          {children}
        </Provider>

       
      </body>
    </html>
  );
}
