import '../globals.scss';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Form',
  description: 'Generated by create next app'
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../translations/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={rubik.className}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
