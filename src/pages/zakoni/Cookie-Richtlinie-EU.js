import ResponsiveAppBar from '../../components/AppBar';
import Footer from '../../components/Footer';




export default function Cookie() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <ResponsiveAppBar />
            <div style={{ flex: '1 0 auto' }}>
            

                <h1>Under Development</h1>
            </div>
            <Footer />
        </div>
    );
}