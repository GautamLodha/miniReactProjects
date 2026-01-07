import Accordian from "./components/accordian"
import ImageSlider from "./components/imageslider/imgslider"
import LoadMoreData from "./components/loadmoredata/loadmoredata"
import Pagination from "./components/pagination/pagination"
import QrCodeGenerator from "./components/qrcodegenerator/qrcodegenerator"
import RandomColorGenerator from "./components/randomclrgenerator"
import StarRating from "./components/starrating"
import TreeView from "./components/treeview/treeview"



function App() {
  return(
    <div>
      <Accordian/>
    <RandomColorGenerator/>
    <StarRating/>
    <ImageSlider/>
    <LoadMoreData/>
    <Pagination/>
    <TreeView/>
    <QrCodeGenerator/>
    </div>
    
  )
}
export default App
