import Accordian from "./components/accordian"
import CustomTabs from "./components/customtabs/tabs"
import DarkMode from "./components/darkmode/darkmode"
import ProfileFinder from "./components/githubprofilefinder/profilefinder"
import ImageSlider from "./components/imageslider/imgslider"
import LoadMoreData from "./components/loadmoredata/loadmoredata"
import Pagination from "./components/pagination/pagination"
import QrCodeGenerator from "./components/qrcodegenerator/qrcodegenerator"
import RandomColorGenerator from "./components/randomclrgenerator"
import AutoComplete from "./components/serachautocomplete/ac"
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
    <DarkMode/>
    <CustomTabs/>
    <ProfileFinder/>
    <AutoComplete/>
    </div>
    
  )
}
export default App
