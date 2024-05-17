import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function News() {
  const router = useRouter();

  useEffect(() => {
    router.push('/news/page/1');
  }, [router]);

  return null;
}