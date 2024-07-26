/** @type {import('next').NextConfig} */
const nextConfig = { 
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
