import './Homepage.css';
import Header from '../Header/Header'
import Masonry from '../Masonry/Masonry';
function HomePage() {
  return (
    <div>
      <Header id="header-wrapper"/>
      <Masonry style="margin: 15px"/>
    </div>
  );
}

export default HomePage;
