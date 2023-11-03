import Layout from "../components/Layout"
import utilStyles from '../styles/utils.module.css'

export default function about() {
    return (
        <Layout
            title="About | NextJS"
            description="Agregue una desc"
        >
            <h1>About</h1>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{" "}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
        </Layout>
    )
}
