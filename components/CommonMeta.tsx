import Head from "next/head";
import { FC } from "react";

const CommonMeta: FC = () => {
    const title = "いくしー";
    const description = "いくしーのWebサイト";
    const url = "https://ixy194194.github.io/";
    const type = "website";
    const imageUrl = "https://ixy194194.github.io/site_sumnail.jpg";
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={url} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={title} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={imageUrl} />
            <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <link href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/reset.css" rel="stylesheet" />
            <link href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/4-1-4/css/4-1-4.css" rel="stylesheet"/>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"
                integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
            <script src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/4-1-4/js/4-1-4.js"></script>
        </Head>
    );
};
export default CommonMeta;
