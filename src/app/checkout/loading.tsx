export default function CheckoutLoading() {
    return (
        <div className="container" style={{
            paddingTop: '100px',
            textAlign: 'center',
            minHeight: '40vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div className="loading-spinner" aria-hidden />
        </div>
    );
}
