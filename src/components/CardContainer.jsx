


export default function CardContainer({children}) {
    
    // this is  just a container for the cards.
    return (
      <div className='flex flex-wrap m-auto gap-5 justify-center my-10'>
        {children} 
      </div>
    )

  }