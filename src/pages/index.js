import React from 'react'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">SVJ 2291</h1>

Kontakty

Základní kontaktní e-mail: ​info@svj2291.cz

Výbor: vybor@svj2291.cz

Členové: clenove@svj2291.cz

Vchod A: vchod.a@svj2291.cz​
Vchod B: vchod.b@svj2291.cz​
Vchod C: vchod.c@svj2291.cz​

Garáže: garaze@svj2291.cz​

Servisní (havarijní) telefon: ​ +420-326-550-160​

​Ostatní

Správce domu (p. Baštecký): sprava.domu​@svj2291.cz​​

​Účetnictví (DomyServis​): ​ucetnictvi@svj2291.cz​​

Společenství vlastníků V Uličce 2291

Sídlo:

V Uličce 2291
Brandýs nad Labem
250 01 Brandýs nad Labem-Stará Boleslav

Identifikační číslo: 03017290

Spisová značka: S 15485 vedená u Městského soudu v Praze​

Výbor:

JAROSLAV URBÁNEK, předseda, +420777007070
JAN VÁCLAV KAŠPAR, místopředseda
TOMÁŠ DOLEŽIL, člen výboru
Kontaktní e-mail na členy výboru: vybor@svj2291.cz​

          </div>
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
