import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrendingList from '@/components/TrendingList';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <TrendingList />
            <section style={{ height: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2 className="text-gradient" style={{ fontSize: '24px', opacity: 0.5 }}>More coming soon...</h2>
            </section>
        </main>
    );
}
