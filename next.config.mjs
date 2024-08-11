/** @type {import('next').NextConfig} */
const nextConfig = { 
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
    images: {
      dangerouslyAllowSVG: true,

        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'visitcount.itsvg.in',
              port: '',
            },
          ],
    },
};

export default nextConfig;
