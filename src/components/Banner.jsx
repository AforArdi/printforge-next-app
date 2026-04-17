import Image from "next/image";
import BannerLogo from '@/assets/images/BLogo.png'

const Banner = () => {
    return ( 
        <div className="container mx-auto flex items-center justify-between my-10">
            <div className="space-y-4">
                <p className="font-medium text-[16px]">Your go-to platform for 3D printing files</p>
                <h2 className="font-bold text-5xl">Discover what's <br /> possible with 3D <br /> printing</h2>
                <p className="text-2xl">Join our community of creators and explore a <br /> vast library of user-submitted models.z</p>
                <button className="btn btn-outline">Browse models</button>
            </div>
            <div>
                <Image
                src={BannerLogo}
                height={500}
                width={500}
                alt="Printforge Banner Logo"
                ></Image>
            </div>
        </div>
     );
}
 
export default Banner;