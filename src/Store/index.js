import {configureStore} from "@reduxjs/toolkit"
import carouselSlice from "./Carousel-slice"

const store = configureStore({
    reducer:{
        carousel: carouselSlice.reducer
    }
})

export default store