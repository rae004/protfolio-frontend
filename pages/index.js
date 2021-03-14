import Layout from '../components/Layout';
import fetchFromCMS from '../lib/service';
import Image from 'next/image'
import Link from 'next/link';
import Head from "next/head";

//todo create actual home page, move this layout to a new page called /portfolios
//todo We will have "/" with about purpose and "/portfolios" list collection type portfolio content.
export default function Home({ portfolioItems }) {
    return (
        <Layout>
            <html lang={"en"}>
                <Head>
                    <title>Portfolio</title>
                    <meta property={"og:title"} content={"Portfolio"} key={"title"}/>
                    <meta property={"og:description"} content={"Bob's first Next.js App. Using a strapi backend."} key={"description"}/>
                    <link rel="icon" href={"/myfav.ico"} />
                </Head>
                <div key={"top-div"} className="entries">
                    <div key={"top-div-2"} className="row justify-content-start ">
                        {portfolioItems.map((portfolio) => (
                            <div key={"top-div-3"} className="col-md-6">
                                <div key={"top-div-4"} className="entry mb-3">
                                    <Link as={"/portfolio/" + portfolio.slug} href="/portfolio/[id]">
                                        <div key={"top-div-5"} className="main-image">
                                            <Image
                                                src={portfolio.image.url}
                                                width={600}
                                                height={400}
                                                alt={portfolio.Headline}
                                            />
                                            <a className={'portfolio-post-titles'} href={"/portfolio/" + portfolio.slug}>
                                                <h1>{portfolio.Headline}</h1>
                                            </a>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </html>
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
