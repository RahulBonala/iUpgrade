export default function CatalogLoading() {
    return (
        <div className="container" style={{
            paddingTop: '100px',
            minHeight: '40vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div className="loading-spinner" aria-hidden />
        </div>
    );
}
