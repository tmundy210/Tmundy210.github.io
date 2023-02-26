import * as React from 'react'
import Layout from '../componets/layout'

const AboutPage = () =>{
    return(
        <Layout pageTitle="About Me">
            <p>HI There! I am the creator of this site, which I built with gatsby</p>
        </Layout>
    )
}
export const Head = () => <title>About me</title>

export default AboutPage