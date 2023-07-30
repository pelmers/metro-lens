export const metadata = {
  title: "Metro Lens | Interactive maps of urban land use and mobility",
  description:
    "Analyze urban land use and mobility patterns with Metro Lens. Designed to help everyone understand how we share the space within our cities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
