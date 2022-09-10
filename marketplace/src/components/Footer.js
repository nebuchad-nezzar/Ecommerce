function Footer() {
    return (
        <div className="flex flex-col">
            <div className="text-sm p-3 w-full flex justify-center bg-amazon-red">
                <p className="link text-gray-300">Back To top</p>
            </div>
            <div className="max-w-full flex flex-col md:flex-row md:justify-around bg-amazon-maroon text-white h-full pb-5">
                <div className="ml-5">
                    <h3 className="mt-4">Get to Know Us</h3>
                    <div className="text-sm leading-snug mt-2 text-gray-300">
                        <p className="link">About Us</p>
                        <p className="link">Careers</p>
                        <p className="link">Press Releases</p>
                        <p className="link">Blogs</p>
                        <p className="link">Contact Us</p>
                        <p className="link">Gift a Smile</p>
                    </div>
                </div>
                <div className="ml-5">
                    <h3 className="mt-4">Social Media</h3>
                    <div className="text-sm leading-snug mt-2 text-gray-300">
                        <p className="link">Facebook</p>
                        <p className="link">Twitter</p>
                        <p className="link">Instagram</p>
                        <p className="link">Youtube</p>
                    </div>
                </div>
                <div className="ml-5">
                    <h3 className="mt-4">Make Money With Us</h3>
                    <div className="text-sm leading-snug mt-2 text-gray-300">
                        <p className="link">Sell With Us</p>
                        <p className="link">Sell under Acceleration</p>
                        <p className="link">Global Selling</p>
                        <p className="link">Become an Affiliate</p>
                        <p className="link">Fulfilment Program</p>
                        <p className="link">Advertise Your Product</p>
                      
                    </div>
                </div>
                <div className="ml-5">
                    <h3 className="mt-4">Let us Help You</h3>
                    <div className="text-sm leading-snug mt-2 text-gray-300">
                        <p className="link">Account</p>
                        <p className="link">Return Center</p>
                        <p className="link">100% Purchase Protection</p>
                        <p className="link"> Download Appp</p>
                        <p className="link">Customer Care</p>
                        <p className="link">Help</p>
                    </div>
                </div>
            </div>
            <div className="flex text-sm p-3 space-x-3 w-full justify-center bg-amazon-maroon">
                <p className="flex text-gray-300">Made By</p>
                <h1 className="link text-gray-300 font-bold">Vatsal Sharma</h1>
            </div>
        </div>
    )
}

export default Footer
