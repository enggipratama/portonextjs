'use client'

import Link from "next/link";

const ViewButton = () => {

    return (
        <div className="text-center mt-5 w-full z-10 ">
        <div className="join">
            <div>
                <Link href="/" className="btn join-item">Home</Link>
                <Link href="/project" className="btn join-item">Project</Link>
                {/* <Link href="/detail" className="btn join-item">Profile</Link> */}
            </div>
        </div>
    </div>
    );
};
export default ViewButton