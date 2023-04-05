import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from "./components";


function App() {
  

  return (
    <BrowserRouter>
		<Box sx={{ backgroundColor: '#000' }}>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Feed />}></Route>
				<Route path="/video/:id" element={<VideoDetail />} ></Route>
				<Route path="/channel/:id" element={<ChannelDetail />} ></Route>
				<Route path="/search/:searchTerm" element={<SearchFeed />} ></Route>
			</Routes>
		</Box>
    </BrowserRouter>
  )
}

export default App
