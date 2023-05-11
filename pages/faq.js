import Link from '../src/components/Link';

export async function getServerSideProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
            .then((res) => {
                return res.json()
            })
            .then((resposta) => {
                return resposta;
            })
    return {
        props: {faq}
    };
}

export default function FAQPage(props) {
    return (
        <div>
            <h1>Alura Cases - FAQ</h1>
            <Link href="/"> home </Link>
            <ul>
                {
                    props.faq.map(({answer, question}) => (
                        <li key={question}>
                            <article>
                                <h2> { question } </h2>
                                <p> { question } </p>
                            </article>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    )
}