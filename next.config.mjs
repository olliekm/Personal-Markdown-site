/** @type {import('next').NextConfig} */
const nextConfig = { 
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
