import React from 'react'





const QuakesList = (props) => {
  // console.log(QuakesList, "this is QuakesList======")
  // const quakesList = props.quakes.features.map((quake, i) =>{
   
  //   return (
  //     <li key={i}>{quake.features.title}> </li>
  //   );
  //   console.log(quakesList, "this is the list")
  // })
  // const quakes = props.quakes.slice()
    console.log(props, 'this is props---------')
  // const quake0 = quakes[0]
    // console.log(quake0.properties)

  return (
    <div>
    <h4>Quakes:</h4>
    <ul>
    {/*quakesList*/}
    </ul>
    </div>
  )

};



export default QuakesList;