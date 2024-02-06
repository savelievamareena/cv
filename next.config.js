/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/_next/static/:path*', // Match static files
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable', // Cache for 1 year
                    },
                ],
            },
        ];
    }
};

module.exports = nextConfig