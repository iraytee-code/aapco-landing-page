import React,{Fragment} from 'react'

const PartnerComponent = ({image}) => {
  return (
    <Fragment>
      <div><img  className="w-[50px] md:w-[70px] lg:w-[100px]" src={image} alt='logo '/></div>
    </Fragment>
  )
}

export default PartnerComponent;
