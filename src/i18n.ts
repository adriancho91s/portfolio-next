import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {supportLocales} from '@/shared';

export default getRequestConfig(async ({locale}) => {
  if (!supportLocales.includes(locale as string)) notFound();

  return {
    messages: (await import(`../locales/${locale}.json`)).default
  };
});