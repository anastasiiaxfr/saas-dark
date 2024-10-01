import FeatureCard from "./Feature";

const features = [
    {
        title: 'Integration ecosystem',
        desc: 'Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.'
    },
    {
        title: 'Goal setting and tracking',
        desc: 'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.'
    },
    {
        title: 'Secure data encryption',
        desc: 'With end-to-end encryption, your data is securely stored and protected from unauthorized access.'
    },
];

export default function FeaturesSection() {
    return (
        <section className="bg-black text-white py-[72px] sm:py-24">
            <div className="container text-center">
                <h2 className='font-bold text-5xl sm:text-6xl tracking-tighter'>
                    Everything you need
                </h2>
                <div className="max-w-xl mx-auto">
                    <p className='mt-5 text-xl opacity-70'>
                        Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
                    </p>
                </div>
                <div className='mt-16 flex flex-col sm:flex-row gap-4'>
                    {features.map(({ title, desc }, index) => (
                        <FeatureCard key={index} title={title} desc={desc} />
                    ))}
                </div>
            </div>
        </section>
    );
}
