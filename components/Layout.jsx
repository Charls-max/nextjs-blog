import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Your Name';

export default function Layout({ children, title, description, home }) {
    console.log("Mostrando HOME :", home)
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
                <meta
                    name="descripcion"
                    content={description}
                />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            // src="/imagenes/perfil.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        ></Image>
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link legacyBehavior href="/">
                            <a>
                                <Image
                                    priority
                                    // src="/imagenes/perfil.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                ></Image>
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link legacyBehavior href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
                <nav>
                    <Link legacyBehavior href="/home">
                        <a>Inicio | </a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                        <a>Blog | </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                        <a>Contacto</a>
                    </Link>
                </nav>
            </header>

            <main>
                {children}
            </main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link legacyBehavior href="/home">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}

            {/* <footer>
                footer
            </footer> */}
        </div>
    )
}

Layout.defaultProps = {
    title: "Next.js | mi website",
    description: "Descripcion del webiste"
}