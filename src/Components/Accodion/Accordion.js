import React, { Fragment } from "react";
import { AccordionComponent } from "../../Components";
import imgPaper from "../../Assets/images/card-text.svg";
import paperimg from "../../Assets/images/picture.svg";
import wallet_img from "../../Assets/images/wallet.svg";
import Accordion_img from "../../Assets/images/arrcodioni9mage.png";


const Accordion = () => {
  return (
    <Fragment>
      <div className="Accordion_container">
      <div className="Accordion ">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 lg:py-20 px-2  md:px-6 text-sm lg:px-36 gap-4">
<div className=" w-[100%] lg:w-[60%] z-20 xl:w-[50%]">
  <AccordionComponent
        title=" Which license do I need?"
        description=" Uniquely leverage other's distinctive infomediaries rather than leveraged supply chains. Continually seize distributed collaboration and idea-sharing whereas user."
        image={imgPaper}
      />
      <AccordionComponent
        title=" How do I get access to a theme?"
        description="Rapidiously incentivize virtual e-commerce and exceptional e-tailers. Progressively network focused catalysts for change without orthogonal benefits. Dramatically empower."
        image={paperimg}
      />

      <AccordionComponent
        title=" How do I see previous orders?"
        description="Proactively monetize long-term high-impact innovation and scalable relationships. Dynamically mesh principle-centered functionalities before next-generation best practices. Distinctively empower."
        image={wallet_img}
      />
  </div>

  <div className="w-[340px] md:w-[350px] z-20"><img  src={Accordion_img} alt="accordion_img"/></div>
</div>
</div>
      </div>

    </Fragment>
  );
};

export default Accordion;
