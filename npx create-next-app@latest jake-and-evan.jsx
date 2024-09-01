npx create-next-app@latest jake-and-evans
cd jake-and-evans
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/clothing">Clothing</Link></li>
          <li><Link href="/accessories">Accessories</Link></li>
          <li><Link href="/makeup">Makeup</Link></li>
          <li><Link href="/skincare">Skincare</Link></li>
          <li><Link href="/watches">Watches</Link></li>
        </ul>
      </nav>
    </header>
  );
};
export const Footer = () => {
    return (
      <footer>
        <p>&copy; 2024 JAKE & EVANS. All rights reserved.</p>
      </footer>
    );
  };
  import { Header } from './Header';
  import { Footer } from './Footer';
  
  export const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  };
  export const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </div>
    );
  };
  import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export const MyApp;
import { Layout } from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <h1>Welcome to JAKE & EVANS</h1>
      <p>Your luxury fashion destination.</p>
    </Layout>
  );
};

export const Home;
  import Layout from '../components/Layout';
  import ProductCard from '../components/ProductCard';
  
  const Clothing = () => {
    const products = [
      // Array of clothing products
    ];
  
    return (
      <Layout>
        <h1>Clothing</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Layout>
    );
  };
  
  export const Clothing;
  import Layout from '../components/Layout';
  import ProductCard from '../components/ProductCard';
  
  const Accessories = () => {
    const products = [
      // Array of accessories products
    ];
  
    return (
      <Layout>
        <h1>Accessories</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Layout>
    );
  };
  
  export const Accessories;
  import Layout from '../components/Layout';
  import ProductCard from '../components/ProductCard';
  
  const Makeup = () => {
    const products = [
      // Array of makeup products
    ];
  
    return (
      <Layout>
        <h1>Makeup</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Layout>
    );
  };
  
  export const Makeup;
  import Layout from '../components/Layout';
  import ProductCard from '../components/ProductCard';
  
  const Skincare = () => {
    const products = [
      // Array of skincare products
    ];
  
    return (
      <Layout>
        <h1>Skincare</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Layout>
    );
  };
  
  export const Skincare;
  import Layout from '../components/Layout';
  import ProductCard from '../components/ProductCard';
  
  const watches = () => {
    const products = [
      // Array of watches products
    ];
  
    return (
      <Layout>
        <h1>Watches</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Layout>
    );
  };
  
  export default;
  const styles = {
    body: {
      fontFamily: "'Arial, sans-serif'",
      margin: 0,
      padding: 0,
    },
    headerFooter: {
      backgroundColor: '#000',
      color: '#fff',
      textAlign: 'center',
      padding: '1rem',
    },
    navUl: {
      listStyle: 'none',
      padding: 0,
    },
    navUlLi: {
      display: 'inline',
      margin: '0 1rem',
    },
    productGrid: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    productCard: {
      border: '1px solid #ddd',
      margin: '1rem',
      padding: '1rem',
      width: '200px',
    },
    productCardImg: {
      maxWidth: '100%',
    },
  };
  
  // Apply styles to elements
                      