# Deployment configuration

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin, without a path (for example, `https://yourdomain.com`), before building. It controls canonical URLs, Open Graph URLs, structured data, robots.txt, and sitemap.xml. The local fallback is only for development; sitemap and structured data stay empty until the production URL is configured.

`NEXT_PUBLIC_SOCIAL_IMAGE` controls the default social preview image. It accepts a public path or full HTTPS URL. Case studies use their own project image when present. Restart the development server after changing `.env`; rebuild and redeploy for production changes.

Set the existing public contact variables in the deployment environment. Never put private credentials in `NEXT_PUBLIC_*` variables.

Run `npm ci`, `npm run lint`, `npx tsc --noEmit`, and `npm run build`. The build needs access to Google Fonts; it includes the existing font files in the output.

After deploying, check the home page, collection pagination, all eight case study links, the contact modal, `/robots.txt`, `/sitemap.xml`, `/icon.svg`, and an invalid URL. Submit the sitemap in Google Search Console when the domain is live.

The resume flow intentionally remains unchanged. Supplied controlled-test measurements and their measurement notes are preserved. Search rankings, favicon appearance, and rich results are determined by search engines and cannot be guaranteed.
