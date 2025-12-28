import Navbar from '@/components/Navbar';

export default function HowItWorks() {
    return (
        <main>
            <Navbar />
            <div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>
                <h1>How iUpgrade Works</h1>
                <p>1. Choose. 2. Verify. 3. Enjoy.</p>
            </div>
        </main>
    );
}
