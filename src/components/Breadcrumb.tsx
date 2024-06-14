// components/Breadcrumb.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
  const router = useRouter();
  const pathSegments = router.pathname.split('/').filter((segment) => segment);

  const buildBreadcrumb = () => {
    const breadcrumb = [];
    for (let i = 0; i < pathSegments.length; i++) {
      const path = `/${pathSegments.slice(0, i + 1).join('/')}`;
      breadcrumb.push({ path, label: decodeURIComponent(pathSegments[i]) });
    }
    return breadcrumb;
  };

  const breadcrumb = buildBreadcrumb();

  return (
    <nav className="flex items-center space-x-2 text-white font-semibold">
      <Link href="/" className="hover:underline">Home</Link>
      {breadcrumb.map((crumb, index) => (
        <span key={index} className="flex items-center">
          <span className="mx-2">/</span>
          <Link href={crumb.path} className="hover:underline capitalize">{crumb.label}</Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
