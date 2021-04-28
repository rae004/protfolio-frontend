import Image from 'next/image';
import Layout from '../../components/Layout';
import fetchFromCMS from '../../lib/service';
import Head from "next/head";
import DateFormat from "../../components/shared/format-datetime-string";
import { Grid } from "@material-ui/core";

const PortfolioItem = ({ portfolio }) => {

    return (
        <Layout>
            <Head>
                <title>{portfolio.Headline}</title>
                <meta property={"og:title"} content={portfolio.Headline} key={"title"}/>
                <meta property={"og:description"} content={portfolio.seo_description} key={"description"}/>
                <link rel="icon" href={"/myfav.ico"} />
            </Head>
            <Grid container xs={12} className="text-center">
                <Grid item xs={12}>
                    <Image
                        src={portfolio.image.url}
                        width={1000}
                        height={500}
                        priority={true}
                        quality={50}
                        alt={portfolio.Headline}
                    />
                </Grid>
                <Grid item xs={12}>
                    <h1>{portfolio.Headline}</h1>
                </Grid>
                <Grid item xs={12}>
                    <small>
                        <DateFormat dateString={portfolio.post_date}/>
                    </small>
                </Grid>
                <Grid item xs={12} className={'text-left'}>
                    <div dangerouslySetInnerHTML={{ __html: portfolio.content }}/>
                </Grid>
            </Grid>
        </Layout>
    );
};

export async function getStaticPaths() {
    const portfolios = await fetchFromCMS(process.env.COLLECTION_TYPE_PORTFOLIO);
    return {
        paths: portfolios.map((portfolio) => ({
            params: {
                slug: portfolio.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const portfolio = await fetchFromCMS(process.env.COLLECTION_TYPE_PORTFOLIO + `?slug=${params.slug}`);
    return {
        props: { portfolio: portfolio[0] },
        revalidate: 1,
    };
}
export default PortfolioItem;