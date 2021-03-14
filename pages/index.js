import Layout from '../components/Layout';
import fetchFromCMS from '../lib/service';
import Image from 'next/image'
import Link from 'next/link';
import Head from "next/head";
import { Grid, Paper} from '@material-ui/core';

//todo create actual home page, move this layout to a new page called /portfolios
//todo We will have "/" with about purpose and "/portfolios" list collection type portfolio content.
export default function Home({ portfolioItems }) {
    return (
        <Layout>
            <Head>
                <title>Portfolio</title>
                <meta property={"og:title"} content={"Portfolio"} key={"title"}/>
                <meta property={"og:description"} content={"Bob's first Next.js App. Using a strapi backend."} key={"description"}/>
                <link rel="icon" href={"/myfav.ico"} />
            </Head>
            <div key={"portfolio-root-div"} className={""}>
                <Grid key={"portfolio-main-grid"} container spacing={3}>
                    {portfolioItems.map((portfolio) => (
                        <Grid key={portfolio.id} item lg={4}>
                            <Paper>
                                <Image
                                    src={portfolio.image.url}
                                    width={600}
                                    height={400}
                                    alt={portfolio.Headline}
                                />
                                <a className={'portfolio-post-titles'} href={"/portfolio/" + portfolio.slug}>
                                    <h1>{portfolio.Headline}</h1>
                                </a>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const portfolioItems = await fetchFromCMS(process.env.COLLECTION_TYPE_PORTFOLIO);
    return {
        props: { portfolioItems },
        revalidate: 1,
    };
}
