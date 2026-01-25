
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Steenbras Properties - Serviced Communal Living Hostels",
  description = "Affordable communal living hostels in Cape Town. Comfort. Community. Affordability.",
  keywords = "communal living, hostels, Cape Town, affordable accommodation, serviced accommodation, Brooklyn, Western Cape",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://steenbras.co.za/"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
