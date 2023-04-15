import { graphql } from 'gatsby'
import React from 'react'
import parse from 'html-react-parser'


/*const pageTemplate = props =>{
    const data = {
        nodeFood: props.pageContext.data
    }
    console.log(data);
    return (
        <h2>{data.nodeFood?.title}</h2>
    )}*/

    /*const pageTemplate = props =>{
        const data = {
            nodeFood: props.pageContext.data
        }
        console.log(data);
        return (
            <h2>{data}</h2>
        )}*/

       export default function Product({ pageContext })  {
            //
            //const { data } = pageContext
            //const { data } = pageContext
            console.log(pageContext.title)
            console.log("hello")
            return (
              <div>

                <h2>{pageContext.title}</h2>
                <h2>{pageContext.time}</h2>
                {pageContext.instructions.processed}
                <h2>{pageContext.instructions2}</h2>
              </div>

            )
          }




//export default pageTemplate

