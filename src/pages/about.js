import * as React from 'react'
import Layout from '../componets/layout'
import Seo from '../componets/seo'

const AboutPage = () =>{
    return(
        <Layout pageTitle="About Me">
            <p>HI There! I am the creator of this site, which I built with gatsby</p>
        </Layout>
    )
}
export const Head = () => <Seo title= "About Me"/>
export default AboutPage