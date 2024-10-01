

const Banner = () => {
    return (
       <section className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,214,255,0.7),rgb(41,216,255,0.7),rgba(255,253,128,0.7),rgb(248,154,191,0.7),rgb(252,214,255,0.7))]">
         <div className="container">
            <p className="font-medium">
                <span className="hidden sm:inline">This page is included in a free SaaS Website Kit. View the complete Kit - </span>
                <a href="#" className="underline underline-offset-4">Explore the demo</a>
            </p>
        </div>
       </section>
    ) 
}

export default Banner;