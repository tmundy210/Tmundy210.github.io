import { graphql } from 'gatsby'
import React from 'react'



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
            const { data } = pageContext
            console.log(data)
            console.log("hello")
            //const htmlString = data.recipeInstruction.processed
            //const parser = new DOMParser();
            //const html = parser.parseFromString(htmlString, 'text/html');
            return (
              <div>
                <h2>{data.title}</h2>
                
                
              </div>
            )
          }




//export default pageTemplate

