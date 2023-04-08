import { Button } from '@/components/Button/Button';
import { Page } from '@/components/Page/Page';
import { Image404 } from '@/icons/404';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export default function Custom404() {
  const { back } = useRouter();
  const goBack = useCallback(() => back(), [back]);

  return (
    <Page>
      <main className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <Image404 />

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </h1>

          <p className="mt-4 text-gray-500 mb-4">
            We can&apos;t find that page.
          </p>

          <Button variant="primary" onClick={goBack}>
            Take me back!
          </Button>
        </div>
      </main>
    </Page>
  );
}
