import { useState } from "react";
import { CgChevronDoubleDown, CgChevronRight } from "react-icons/cg";


type Dataprops = {
  id: number;
  label: string;
  children?: Dataprops[];
};
type PresentationProps = {
  data: Dataprops;
};

const Presentation = ({ data }: PresentationProps) => {
    const [more,setMore] = useState<boolean>(false)
  return (
    <div className="ml-5 " >
      <div  >{data.label} {data.children ? <button onClick={()=>setMore(!more)} ><CgChevronDoubleDown/></button>  : null } </div>
      {more && data.children &&
        data.children?.map((child) => (
          <Presentation key={child.id} data={child} />
        ))}
    </div>
  );
};

export default Presentation;
