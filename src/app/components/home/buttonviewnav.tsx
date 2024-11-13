'use client'

import Link from "next/link";

const ViewButton = () => {

    return (
        <div className="text-center mt-5 w-full z-10">
        <div className="join">
            <div>
                <Link href="/" className="btn join-item font-bold text-primary lg:w-auto px-4 py-2 rounded-md hover:bg-primary hover:text-white text-white transition-all">Home</Link>
                <Link href="/project" className="btn join-item font-bold text-primary lg:w-auto px-4 py-2 rounded-md hover:bg-primary hover:text-white text-white transition-all">Project</Link>
                <Link href="/login" className="btn join-item font-bold text-primary lg:w-auto px-4 py-2 rounded-md hover:bg-primary hover:text-white text-white transition-all">Login</Link>
            </div>
        </div>
    </div>
    );
};
export default ViewButton