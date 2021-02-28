import Image from 'next/image';
import Layout from '../../components/Layout';
import fetchFromCMS from '../../lib/service';
import Head from "next/head";
import DateFormat from "../../components/shared/format-datetime-string";

const PortfolioItem = ({ portfolio }) => {

    return (
        <Layout>
            <Head>
                <title>{portfolio.Headline}</title>
                <meta property={"og:title"} content={portfolio.Headline} key={"title"}/>
                <meta property={"og:description"} content={portfolio.seo_description} key={"description"}/>
                <link rel="icon" href={"/myfav.ico"} />
            </Head>
            <div className="row">
                <div className="portfolio-image text-center mb-4">
                    <div className="col-md-12">
                        <Image
                            src={"http://localhost:1337" + portfolio.image.url}
                            width={1000}
                            height={500}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="portfolio-content">
                    <div className="col-md-12">
                        <div className="portfolio-headline text-center m-2">
                            <h1>{portfolio.Headline}</h1>
                            <small>
                                <DateFormat dateString={portfolio.post_date}/>
                            </small>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: portfolio.content }}/>
                    </div>
                </div>
            </div>
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