"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PrelineScript() {
  const router = useRouter();

  useEffect(() => {
    // Dynamically import the 'preline/preline' module
    import('preline/preline').then(() => {
      // Ensure that HSStaticMethods.autoInit is called after the module is loaded
      setTimeout(() => {
        if (window.HSStaticMethods && window.HSStaticMethods.autoInit) {
          window.HSStaticMethods.autoInit();
        }
      }, 100);
    });
  }, [router.asPath]); // Depend on the path for re-running the effect

  return null;
}
