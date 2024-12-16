
import type { NextPage } from 'next';
import Image from "next/image";

const CompanyLogo: NextPage = () => {
    return (
        <div className="w-auto h-[200px] px-4 sm:px-8 md:px-[300px] overflow-hidden flex flex-wrap items-center justify-center sm:justify-between gap-8">
            <Image className="object-cover cursor-pointer" width={85} height={87} alt="zapier" src="/homepage/Companies/zapier.png" />
            <Image className="object-cover cursor-pointer" width={107} height={109} alt="pipedrive" src="/homepage/Companies/pipedrive.png" />
            <Image className="object-cover cursor-pointer" width={135} height={139} alt="cibbank" src="/homepage/Companies/cibbank.png" />
            <Image className="object-cover cursor-pointer" width={63} height={65} alt="Z" src="/homepage/Companies/Z.png" />
            <Image className="object-cover cursor-pointer" width={98} height={101} alt="burnt toast" src="/homepage/Companies/burnt-toast.png" />
            <Image className="object-cover cursor-pointer" width={113} height={115} alt="panda doc" src="/homepage/Companies/pandadoc.png" />
            <Image className="object-cover cursor-pointer" width={84} height={87} alt="moz" src="/homepage/Companies/moz.png" />
        </div>
    );
};

export default CompanyLogo;
