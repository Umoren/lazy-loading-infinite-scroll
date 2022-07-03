import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy, Suspense } from 'react'
import { cardData } from './mock';
// lazy load the component
const CardComponent = lazy(() => import("./components/CardComponent"))


function App() {
  return (
    <div>
      <h1>React Lazy Loading with Infinite Scroll</h1>
      <Suspense fallback={<div>isLoading...</div>}>
        <CardComponent cardData={cardData} />
      </Suspense>
    </div>
  );
}

export default App;
