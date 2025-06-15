import type { Metadata } from "next";
import localfont from "next/font/local";
import { Inter } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import { Raleway } from "next/font/google";
import "../globals.css";
import "../components/header.css";
import "../components/footer.css";
import "./(index)/home.css";
import "./books/Books.css";
import "./about/About.css";
import "./contact/Contact.css";
import "./purchase/[id]/Purchase.css";
import "../components/Loader.css";
import "../components/EmailModal.css";
import "./checkout/[status]/Checkout.css";
import Header from "../components/Header";
import NewFooter from "../components/newFooter";
import { Providers } from "../Providers";

const moneta = localfont({
    src: [
        {
            path: "../../fonts/Moneta-Regular.ttf",
            weight: "400",
        },
    ],
    variable: "--font-moneta",
});

const inter = Inter({ subsets: ["latin"] });
const source_sans_3 = Source_Sans_3({
    subsets: ["latin"],
});

const raleway = Raleway({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cecilia Torres",
    description: "Cecilia Torres-Tanatóloga",
    icons: {
        icon: "./images/icon.svg",
        shortcut: "./images/icon.svg",
        apple: "./images/icon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${raleway.className} ${moneta.variable} `}>
                <Providers>
                    <Header />
                    {children}
                    <NewFooter />
                </Providers>
            </body>
        </html>
    );
}
