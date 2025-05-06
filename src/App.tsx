import LocomotiveScroll from 'locomotive-scroll';
import Blog from './pages/Blogs';
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (  
    <div data-scroll>
      <Blog/>
    </div>
  )
}

export default App