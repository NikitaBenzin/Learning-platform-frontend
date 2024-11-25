import { Header } from './components/ui/header/Header';

export default function Error404() {
  return (
    <div className='container'>
      <Header />
      <main className='not-found'>
        <h1 className='text-4xl'>404 Not found</h1>
      </main>
    </div>
  );
}
