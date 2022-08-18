import Head from 'next/head'
import { Navbar } from '../ui'

export const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon APP'}</title>
                <meta name='author' content='Joaquin Cortes' />
                <meta name='description' content={`Information about pokemon ${title}`} />
                <meta name='keywords' content={`${title}, pokemon, pokedex`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
