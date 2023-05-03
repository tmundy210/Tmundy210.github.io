import * as React from 'react'
import Layout from '../componets/layout'
import Seo from '../componets/seo'

const AboutPage = () =>{
    return(
        <Layout pageTitle="About Me">
            <p>Hello, and welcome to my website. This is the first website I've made so please be nice.</p>
        </Layout>
    )
}
export const Head = () => <Seo title= "About Me"/>
export default AboutPage